<template>
  <div class="skill column is-one-third">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title is-size-5">{{ name }}</p>
      </header>
      <div class="card-content">
        <div class="skill-item" v-for="item in items" :key="item.id">
          <p class="has-text-weight-bold">{{ item.name }}</p>
          <b-progress size="is-medium" type="is-warning" :value="item.value * 10" show-value>{{
            item.value }} out of 10</b-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    name: String,
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
.skill .card {
  height: 100%;
}

.skill-item {
  margin-bottom: 1em;
}
</style>
