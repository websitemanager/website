<template>
  <section class="section portfolio has-background-white-bis">
    <div class="container">
      <h2 class="title is-2 has-text-centered">Portfolio</h2>
      <h4 class="subtitle is-4 has-text-centered">A collection of some of the websites I was lucky
        enough to contribute to.</h4>
      <div class="columns collection is-multiline">
        <PortfolioItem v-for="item in portfolioItems" :key="item.id" :id="item.id" class="item
                              is-one-third column" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import PortfolioItem from '@/components/PortfolioItem.vue';

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem,
  },
  data() {
    return {
      portfolioItems: [],
    };
  },
  methods: {
    ...mapActions([
      'getPortfolio',
    ]),
  },
  mounted() {
    if (!this.$store.getters.getItems('portfolio').length) {
      this.getPortfolio().then(() => { this.portfolioItems = this.$store.getters.getItems('portfolio'); });
    } else {
      this.portfolioItems = this.$store.getters.getItems('portfolio');
    }
  },
};
</script>
