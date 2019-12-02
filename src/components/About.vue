<template>
  <section class="about section">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <h3 class="title is-3">About Me</h3>
          <div class="content">
            <p>I am a web developer from the <strong>Philippines</strong> using <strong>PHP</strong>
            and <strong>Javascript</strong> for development.</p>
            <p>I mainly use <strong>Drupal</strong> for developing websites but have experience with
            other technologies not limiting to <strong>PHP</strong>. I mostly do <strong>backend
            development</strong> but also comfortable with <strong>frontend development</strong> and
          a little bit of <strong>devops</strong>.</p>
            <p>I am able to build websites from ground up and also do support for existing
            websites.</p>
          </div>
        </div>
        <div class="column is-5 is-offset-1">
          <Skill v-for="skill in skills" :key="skill.id" :id="skill.id" />
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
    }).base(process.env.VUE_APP_AIRTABLE_SKILLS_BASE);

    const getSkills = async () => {
      const table = base('Skills');
      const records = await api.getRecords(table);

      return records.map(record => ({ id: record.getId() }));
    };

    this.skills = await getSkills();
  },
};
</script>
