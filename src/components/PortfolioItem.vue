<template>
  <div class="item">
    <div v-if="!item.loaded" class="loading">
      <half-circle-spinner :animation-duration="1000" :size="30" color="#73A839" />
    </div>

    <router-link v-if="item.loaded" :to="{ name: 'portfolioItemDetail', params: { id: item.id } }"
                 class="card is-block has-background-white">
      <div class="card-image">
        <figure class="image is-16by9">
          <img v-lazy="item.thumbnail" :alt="item.name" :title="item.name" />
        </figure>
      </div>
      <div class="card-content">
        <h5 class="title is-5">{{ item.name }}</h5>
        <div class="content" v-if="item.description" v-html="item.description" />
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { HalfCircleSpinner } from 'epic-spinners';

export default {
  name: 'PortfolioItem',
  props: {
    id: String,
  },
  components: {
    HalfCircleSpinner,
  },
  data() {
    return {
      item: { loaded: false },
    };
  },
  mounted() {
    this.item = this.$store.getters.getItem('portfolio', this.id);

    if (!this.item.loaded) {
      this
        .getPortfolioItem(this.id)
        .then(() => { this.item = this.$store.getters.getItem('portfolio', this.id); });
    }
  },
  methods: {
    ...mapActions([
      'getPortfolioItem',
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
