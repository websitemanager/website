<template>
  <div class="skill">
    <div v-if="!skill.loaded" class="loading">
      <half-circle-spinner :animation-duration="1000" :size="30" color="#73A839" />
    </div>

    <div v-if="skill.loaded">
      <h6 class="skill-name title is-6">{{ skill.name }}</h6>
      <b-progress type="is-success" :value="skill.value * 10"
                  class="skill-value"></b-progress>
      <b-taglist class="skill-items">
        <b-tag type="is-info" v-for="item in skill.items" :key="item.id">
          <a :href="item.link">{{ item.name }}</a>
        </b-tag>
      </b-taglist>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { HalfCircleSpinner } from 'epic-spinners';

export default {
  name: 'Skill',
  props: {
    id: String,
  },
  components: {
    HalfCircleSpinner,
  },
  data() {
    return {
      skill: { loaded: false },
    };
  },
  mounted() {
    this.skill = this.$store.getters.getItem('skills', this.id);

    if (!this.skill.loaded) {
      this
        .getSkillItems(this.id)
        .then(() => { this.skill = this.$store.getters.getItem('skills', this.id); });
    }
  },
  methods: {
    ...mapActions([
      'getSkillItems',
    ]),
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

  .loading {
    padding: 3rem 0;

    .half-circle-spinner {
      margin: 0 auto;
    }
  }
}
</style>
