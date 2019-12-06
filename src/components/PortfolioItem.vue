<template>
  <div class="item">
    <div v-if="!getPortfolioItem.loaded" class="loading">
      <half-circle-spinner :animation-duration="1000" :size="30" color="#73A839" />
    </div>

    <router-link v-if="getPortfolioItem.loaded" :to="{ name: 'portfolioItemDetail', params: { id:
                       getPortfolioItem.id } }" class="card is-block has-background-white">
      <div class="card-image">
        <figure class="image is-16by9">
          <img v-lazy="getPortfolioItem.thumbnail" :alt="getPortfolioItem.name"
               :title="getPortfolioItem.name" />
        </figure>
      </div>
      <div class="card-content">
        <h5 class="title is-5">{{ getPortfolioItem.name }}</h5>
        <div class="content" v-if="getPortfolioItem.description"
                             v-html="getPortfolioItem.description" />
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { HalfCircleSpinner } from 'epic-spinners';

export default {
  name: 'PortfolioItem',
  props: {
    id: String,
  },
  components: {
    HalfCircleSpinner,
  },
  computed: {
    ...mapGetters('airtable', [
      'getItem',
    ]),
    getPortfolioItem() {
      return this.getItem('portfolio', this.id);
    },
  },
  mounted() {
    this.fetchPortfolioItem(this.id);
  },
  methods: {
    ...mapActions('airtable', [
      'fetchPortfolioItem',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
}

.item {
  .loading {
    padding: 5rem 0;

    .half-circle-spinner {
      margin: 0 auto;
    }
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
