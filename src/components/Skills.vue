<template>
  <section class="skills section is-medium">
    <div class="container">
      <div class="columns is-multiline">
        <Skill name="Continuous Integration Tools" items="[abcd, foo]" />
        <Skill name="Continuous Integration Tools" items="[abcd, foo]" />
        <Skill name="Continuous Integration Tools" items="[abcd, foo]" />
        <Skill name="Continuous Integration Tools" items="[abcd, foo]" />
        <Skill name="Continuous Integration Tools" items="[abcd, foo]" />
        <Skill name="Continuous Integration Tools" items="[abcd, foo]" />
        <Skill name="Continuous Integration Tools" items="[abcd, foo]" />
        <Skill name="Continuous Integration Tools" items="[abcd, foo]" />
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
};
</script>
