<template>
  <div class="column is-one-third">
    <div class="card">
      <header class="card-header">
        <h3 class="title card-header-title">{{ name }}</h3>
      </header>
      <div class="card-content">
        <div class="content">
          abcd
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
  data() {
    return {
      skillItems: [],
    };
  },
};
</script>
