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
          <div v-for="skill in skills" :key="skill.id" class="skills">
            <h6 class="title is-6">{{ skill.name }}</h6>
            <b-progress type="is-success" :value="skill.value * 10"></b-progress>
            <b-taglist>
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
  async mounted() {
    const base = new Airtable({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
    }).base(process.env.VUE_APP_AIRTABLE_BASE);

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

    const getItem = async (id) => {
      const table = base('Items');
      const item = await api.getRecord(table, id);

      return {
        id: item.id,
        name: item.Name,
      };
    };

    getSkills()
      .then((records) => {
        const skills = [];

        records.forEach((record) => {
          const skill = {
            id: record.id,
            value: record.value,
            name: record.name,
            items: [],
          };

          record.items.forEach(async (id) => {
            const item = await getItem(id);

            skill.items.push({
              id: item.id,
              name: item.name,
            });
          });

          skills.push(skill);
        });

        this.skills = skills;
      });
  },
};
</script>
