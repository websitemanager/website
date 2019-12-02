<template>
  <div class="skill">
    <h6 class="skill-name title is-6">{{ skill.name }}</h6>
    <b-progress type="is-success" :value="skill.value * 10"
                class="skill-value"></b-progress>
    <b-taglist class="skill-items">
      <b-tag type="is-info" v-for="item in skill.items" :key="item.id">
        <a :href="item.link">{{ item.name }}</a>
      </b-tag>
    </b-taglist>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    skill: Object,
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
