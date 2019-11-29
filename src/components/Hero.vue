<template>
  <section class="header hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-one-third">
            <h1 class="title is-1">Travor James</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis, mauris
            non elementum commodo, lacus felis imperdiet mauris, varius tempor nibh ex at mauris.
            Proin facilisis tellus ut nisi commodo, et sagittis.</p>
          </div>
          <div class="column is-two-thirds has-text-centered">
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
.header {
  background-image: url('../assets/banner.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
