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
          <Skill v-for="skill in skills" :key="skill.id" :id="skill.id" class="skill" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Airtable from 'airtable';
import api from '@/services/api';
import Skill from '@/components/Skill.vue';

export default {
  name: 'About',
  components: {
    Skill,
  },
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

      return records.map(record => ({ id: record.getId() }));
    };

    this.skills = await getSkills();
  },
};
</script>
