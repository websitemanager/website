<template>
  <div>abcd</div>
</template>

<script>
import api from '@/services/api';
import Skill from '@/components/Skill.vue';

api.base('Skills').select({
  // Selecting the first 3 records in Grid view:
  maxRecords: 3,
  view: 'Grid view',
}).eachPage(
  (records, fetchNextPage) => {
    records.forEach((record) => {
      console.log('Retrieved', record.get('Name'));
    });

    fetchNextPage();
  },
);

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
  background-color: #eef8fb;
}
</style>
