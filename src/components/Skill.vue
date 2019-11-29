<template>
  <div class="column is-one-third">
    <div class="card">
      <header class="card-header">
        <h3 class="title card-header-title">{{ name }}</h3>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="skill-item" v-for="item in items" :key="item.id">
            <h4 class="title">{{ item.name }}</h4>
            <b-progress type="is-info" :value="item.value" class="subtitle"></b-progress>
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
