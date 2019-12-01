<template>
  <section class="about section is-medium">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <h3 class="title is-3">About</h3>
          <div class="content">
            <p>Donec accumsan tellus et tortor pellentesque rutrum. Curabitur et erat aliquet,
            mollis ipsum id, bibendum ligula. Fusce neque neque, commodo fringilla massa nec,
            scelerisque accumsan velit. Suspendisse semper dui at dolor ultrices.</p>
            <p>Integer felis turpis, tempor id interdum sed, varius vitae lectus. Integer ultricies,
            neque ac finibus imperdiet, turpis leo volutpat lorem, eget efficitur massa odio eget
            dolor. Vestibulum nisl quam, volutpat eu augue.</p>
          </div>
        </div>
        <div class="column is-5 is-offset-1">
          <div v-for="skill in skills" :key="skill.id" class="skill">
            <h6 class="skill-name title is-6">{{ skill.name }}</h6>
            <b-progress type="is-success" :value="skill.value * 10"
                        class="skill-value"></b-progress>
            <b-taglist class="skill-items">
              <b-tag type="is-info" v-for="item in skill.items" :key="item.id">
                {{ item.name }}
              </b-tag>
            </b-taglist>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Airtable from 'airtable';
import api from '@/services/api';

export default {
  name: 'About',
  data() {
    return {
      skills: [],
    };
  },
  mounted() {
    const base = new Airtable({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
    }).base(process.env.VUE_APP_AIRTABLE_BASE);

    const getItem = async (id) => {
      const table = base('Items');
      const item = await api.getRecord(table, id);

      return {
        id: item.id,
        name: item.Name,
      };
    };

    const getSkills = async () => {
      const table = base('Skills');
      const records = await api.getRecords(table);

      return records.map(record => (
        {
          id: record.getId(),
          name: record.get('Name'),
          value: record.get('Value'),
          items: record.get('Items'),
        }
      ));
    };

    const getSkillItems = async () => {
      const skills = await getSkills();

      skills.map(async (skill) => {
        const skillItem = {
          id: skill.id,
          name: skill.name,
          value: skill.value,
          items: [],
        };

        await skill.items.reduce(async (prev, item) => {
          await prev;
          const i = await getItem(item);
          skillItem.items.push(i);
        }, Promise.resolve());

        this.skills.push(skillItem);
      });
    };

    getSkillItems();
  },
};
</script>

<style lang="scss" scoped>
.skill {
  .skill-name, .skill-value {
    margin-bottom: 0.5rem;
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
}
</style>
