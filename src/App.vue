<template>
  <div id="app">
    <b-navbar wrapper-class="container" transparent fixed-top shadow class="is-uppercase is-size-7">
      <template slot="brand">
        <b-navbar-item tag="router-link" class="has-text-weight-bold" :to="{ path: '/' }">
          Strict Panda
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" v-scroll-to="'section.about'">
          About
        </b-navbar-item>
        <b-navbar-item href="https://blog.strict-panda.com">Blog</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" v-scroll-to="'section.portfolio'">
          Portfolio
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/' }" v-scroll-to="'section.contact'">
          Contact
        </b-navbar-item>
      </template>
    </b-navbar>

    <router-view />

    <footer class="footer has-background-dark has-text-light">
      <div class="container">
        <div class="columns">
          <div class="column about">
            <h6 class="title is-6 has-text-light has-text-weight-bold is-uppercase">About</h6>
            <div class="content">
              <p>This website is built using <a class="logo vuejs" href="https://vuejs.org"> VueJS</a>
              and <a class="logo bulma" href="https://bulma.io">Bulma</a>.</p>
              <p>Hosted on <a class="logo gitlab" href="https://gitlab.com">Gitlab</a> and
              <a class="logo netlify" href="https://www.netlify.com/">Netlify</a>.</p>
              <p>Copyright &copy; Strict Panda {{ year }}.
              Images from <a href="https://www.freepik.com/home"
                             class="has-text-primary" target="_blank">Freepik</a>.</p>
            </div>
          </div>
          <div class="column contact">
            <h6 class="title is-6 has-text-light has-text-weight-bold is-uppercase">Contact</h6>
            <div class="content">
              <p>Contact me at <a class="has-text-primary has-text-weight-bold"
                                  :href="'mailto:' + email">{{ email }}</a>.</p>
            </div>
          </div>
          <div class="column social">
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
@import "~bulmaswatch/cerulean/variables";

@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~bulmaswatch/cerulean/overrides";
@import "~buefy/src/scss/buefy";

footer.footer .column.about {
  a {
    color: $text-light;
    font-weight: $weight-bold;

    &.logo::before {
      background: no-repeat center/1em;
      content: '';
      width: 1em;
      height: 1em;
      display: inline-block;
      margin-right: 2px;
    }

    &.vuejs::before {
      background-image: url('./assets/vuejs-logo.svg');
    }

    &.bulma::before {
      background-image: url('./assets/bulma-logo.svg')
    }

    &.gitlab::before {
      background-image: url('./assets/gitlab-logo.svg')
    }

    &.netlify::before {
      background-image: url('./assets/netlify-logo.svg')
    }
  }
}

@include mobile {
  footer.footer {
    .columns {
      display: flex;
      flex-direction: column;
    }

    .about {
      order: 3;
    }

    .contact {
      order: 2;
    }

    .social {
      order: 1;
    }
  }
}
</style>
