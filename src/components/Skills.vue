<template>
  <section class="skills section is-medium">
    <div class="container">
      <h3 class="title is-3 has-text-centered">Skills</h3>
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
            { name: 'Travis CI', value: 5 },
            { name: 'Jenkins', value: 3 },
            { name: 'Circle CI', value: 5 },
            { name: 'Gitlab CI', value: 6 },
          ],
        },
        {
          id: 2,
          name: 'Databases',
          items: [
            { name: 'MySQL', value: 8 },
            { name: 'SQLite', value: 4 },
          ],
        },
        {
          id: 3,
          name: 'Frameworks and Other Technologies',
          items: [
            { name: 'Drupal', value: 9 },
            { name: 'AngularJS', value: 6 },
            { name: 'Wordpress', value: 3 },
            { name: 'jQuery', value: 8 },
          ],
        },
        {
          id: 4,
          name: 'Operating Systems',
          items: [
            { name: 'Windows', value: 7 },
            { name: 'MacOS/OS X', value: 8 },
            { name: 'Linux', value: 8 },
          ],
        },
        {
          id: 5,
          name: 'Scripting Languages',
          items: [
            { name: 'PHP', value: 8 },
            { name: 'Ruby', value: 4 },
            { name: 'Bash', value: 6 },
            { name: 'Javascript', value: 7 },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section.skills {
  background-color: #dfdfff;
}
</style>
