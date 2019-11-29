<template>
  <div id="app">
    <b-navbar wrapper-class="container" transparent="true" fixed-top="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Website
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">About</b-navbar-item>
        <b-navbar-item href="#">Skills</b-navbar-item>
        <b-navbar-item href="#">Portfolio</b-navbar-item>
        <b-navbar-item href="#">Contact</b-navbar-item>
      </template>
    </b-navbar>

    <router-view />
  </div>
</template>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  .header {
    background-image: url('assets/banner.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
