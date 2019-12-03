<template>
  <div id="app">
    <b-navbar wrapper-class="container" transparent fixed-top shadow class="is-uppercase is-size-7
                             has-text-weight-bold">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Strict Panda
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item href="#">About</b-navbar-item>
        <b-navbar-item href="https://blog.strict-panda.com">Blog</b-navbar-item>
        <b-navbar-item href="#">Portfolio</b-navbar-item>
        <b-navbar-item href="#">Contact</b-navbar-item>
      </template>
    </b-navbar>

    <router-view />

    <footer class="footer has-background-dark has-text-light">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h6 class="title is-6 has-text-light has-text-weight-bold is-uppercase">About</h6>
            <div class="content">
              <p>Web developer with background of <span class="has-text-weight-bold">PHP</span> and
              <span class="has-text-weight-bold">Javascript</span>.</p>
              <p>Copyright &copy; Strict Panda {{ year }}.
              Images from <a href="https://www.freepik.com/home"
                             class="has-text-primary" target="_blank">Freepik</a>.</p>
            </div>
          </div>
          <div class="column">
            <h6 class="title is-6 has-text-light has-text-weight-bold is-uppercase">Contact</h6>
            <div class="content">
              <p>Contact me at <a class="has-text-primary has-text-weight-bold"
                                  :href="'mailto:' + email">{{ email }}</a>.</p>
            </div>
          </div>
          <div class="column">
            <h6 class="title is-6 has-text-light has-text-weight-bold is-uppercase">Follow me</h6>
            <nav class="level is-mobile">
              <div class="level-left">
                <a href="https://gitlab.com/virtualcursor" class="has-text-light level-item">
                  <b-icon pack="fab" icon="gitlab"></b-icon>
                </a>
                <a href="#" class="has-text-light level-item">
                  <b-icon pack="fab" icon="instagram"></b-icon>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      email: 'me@strict-panda.com',
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss">
  // @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700|Roboto:400,700&display=swap');

  // $family-sans-serif: 'Roboto', sans-serif;
  // $title-family: 'Open Sans', sans-serif;
  // $body-size: 18px;

  @import "~bulmaswatch/cerulean/variables";

  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  @import "~bulma";
  @import "~bulmaswatch/cerulean/overrides";
  @import "~buefy/src/scss/buefy";
</style>
