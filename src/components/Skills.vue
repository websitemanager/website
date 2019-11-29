<template>
  <section class="skills section is-medium">
    <div class="container">
      <div class="columns is-multiline">
        <Skill v-for="skill in skills" :name="skill.name" :items="skill.items" :key="skill.id" />
      </div>
    </div>
  </section>
</template>

<script>
import Skill from '@/components/Skill.vue';

export default {
  name: 'Skills',
  components: {
    Skill,
  },
  data() {
    return {
      skills: [
        {
          id: 1,
          name: 'Continuous Integration Tools',
          items: [
            { name: 'Travis CI', value: 50 },
            { name: 'Jenkins', value: 30 },
            { name: 'Circle CI', value: 50 },
            { name: 'Gitlab CI', value: 60 },
          ],
        },
        {
          id: 2,
          name: 'Databases',
          items: [
            { name: 'MySQL', value: 80 },
            { name: 'SQLite', value: 40 },
          ],
        },
        {
          id: 3,
          name: 'Frameworks and Other Technologies',
          items: [
            { name: 'Drupal', value: 90 },
            { name: 'AngularJS', value: 60 },
            { name: 'Wordpress', value: 30 },
            { name: 'jQuery', value: 80 },
          ],
        },
        {
          id: 4,
          name: 'Operating Systems',
          items: [
            { name: 'Windows', value: 70 },
            { name: 'MacOS/OS X', value: 80 },
            { name: 'Linux', value: 80 },
          ],
        },
        {
          id: 5,
          name: 'Scripting Languages',
          items: [
            { name: 'PHP', value: 80 },
            { name: 'Ruby', value: 40 },
            { name: 'Bash', value: 60 },
            { name: 'Javascript', value: 70 },
          ],
        },
      ],
    };
  },
};
</script>
