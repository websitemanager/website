<template>
  <section class="hero portfolio-detail is-medium">
    <b-loading :active.sync="!getPortfolioItem.loaded" :can-cancel="true"></b-loading>

    <div v-if="getPortfolioItem.loaded" class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <a class="is-block" @click="isImageModalActive = true">
              <figure class="image is-16by9">
                <img v-lazy="getPortfolioItem.image" :alt="getPortfolioItem.name"
                     :title="getPortfolioItem.name">
              </figure>
            </a>
          </div>
          <div class="column is-half">
            <h3 class="title is-3">{{ getPortfolioItem.name }}</h3>
            <h5 v-if="getPortfolioItem.description"
                class="description title is-5">Description</h5>
            <div v-if="getPortfolioItem.description"
                 class="content" v-html="getPortfolioItem.description"></div>
            <h5 v-if="getPortfolioItem.contributions"
                class="contributions title is-5">Contributions</h5>
            <div v-if="getPortfolioItem.contributions"
                 class="content" v-html="getPortfolioItem.contributions"></div>
            <b-button icon-left="external-link-alt"
                      type="is-success" tag="a" :href="getPortfolioItem.link" target="_blank">
              Visit website
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <b-modal :active.sync="isImageModalActive">
      <figure class="image is-16by9">
        <img :src="getPortfolioItem.image" :alt="getPortfolioItem.name" />
      </figure>
    </b-modal>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PortfolioDetail',
  props: {
    id: String,
  },
  data() {
    return {
      isImageModalActive: false,
    };
  },
  computed: {
    ...mapGetters('airtable', [
      'getPortfolioItem',
    ]),
  },
  mounted() {
    this.fetchPortfolioDetails(this.id);
  },
  methods: {
    ...mapActions('airtable', [
      'fetchPortfolioDetails',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.portfolio-detail {
  .description, .contributions {
    margin-bottom: 0.5rem;
  }
}

img[lazy='loaded'] {
  opacity: 0;
  animation-name: fadein;
  animation-duration: .5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
