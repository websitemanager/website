<template>
  <div class="column is-one-third">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ name }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="skill-item" v-for="item in items" :key="item.id">
            <p>{{ item.name }}</p>
            <b-progress type="is-info" :value="item.value * 10" show-value>{{
              item.value }} out of 10</b-progress>
          </div>
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
