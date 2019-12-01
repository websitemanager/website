<template>
  <div id="app">
    <b-navbar wrapper-class="container" transparent fixed-top shadow class="is-uppercase is-size-7
                             has-text-weight-bold">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Website
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
        <b-navbar-item href="#">Blog</b-navbar-item>
        <b-navbar-item href="#">Portfolio</b-navbar-item>
        <b-navbar-item href="#">Contact</b-navbar-item>
      </template>
    </b-navbar>

    <router-view />

    <footer class="footer has-background-dark has-text-light">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="content">
              <p>abcd</p>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <p>abcd</p>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <p>abcd</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

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
