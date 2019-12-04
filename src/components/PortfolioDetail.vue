<template>
  <section class="hero portfolio-detail is-medium">
    <b-loading :active.sync="!item.loaded" :can-cancel="true"></b-loading>

    <div v-if="item.loaded" class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <a class="is-block" @click="isImageModalActive = true">
              <figure class="image is-16by9">
                <img :src="item.image" :alt="item.name" :title="item.name">
              </figure>
            </a>
          </div>
          <div class="column is-half">
            <h3 class="title is-3">{{ item.name }}</h3>
            <h5 v-if="item.description" class="description title is-5">Description</h5>
            <div v-if="item.description" class="content" v-html="item.description"></div>
            <h5 v-if="item.contributions" class="contributions title is-5">Contributions</h5>
            <div v-if="item.contributions" class="content" v-html="item.contributions"></div>
            <b-button icon-left="external-link-alt"
                      type="is-success" tag="a" :href="item.link" target="_blank">
              Visit site
            </b-button>
          </div>
        </div>
      </div>
    </div>

    <b-modal :active.sync="isImageModalActive">
      <figure class="image is-16by9">
        <img :src="item.image" :alt="item.name" />
      </figure>
    </b-modal>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PortfolioDetail',
  props: {
    id: String,
  },
  data() {
    return {
      item: { loaded: false },
      isImageModalActive: false,
    };
  },
  mounted() {
    this
      .getPortfolioDetails(this.id)
      .then(() => { this.item = this.$store.getters.getPortfolioItem(this.id); });
  },
  methods: {
    ...mapActions([
      'getPortfolioDetails',
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
</style>
