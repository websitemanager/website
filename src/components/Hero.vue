<template>
  <section class="header hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="website-name column is-one-third">
            <h1 class="title is-1">Strict Panda</h1>
            <p>Doing web development as a profession and have built projects ranging from university
            websites up to e-commerce.</p>
          </div>
          <div class="website-image column is-two-thirds has-text-centered">
            <img src="@/assets/productivity.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/mixins';

.header {
  background-image: url('../assets/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@include mobile {
  .hero-body {
    .columns {
      display: flex;
      flex-direction: column;
    }

    .website-name {
      order: 2;
    }

    .website-image {
      order: 1;
    }
  }
}
</style>
