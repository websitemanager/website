<template>
  <section class="section portfolio has-background-white-bis">
    <div class="container">
      <h2 class="title is-2 has-text-centered">Portfolio</h2>
      <h4 class="subtitle is-4 has-text-centered">A collection of some of the websites I was lucky
        enough to contribute to.</h4>
      <div class="columns collection is-multiline">
        <PortfolioItem v-for="item in getPortfolioItems" :key="item.id" :id="item.id" class="item
                              is-one-third column" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PortfolioItem from '@/components/PortfolioItem.vue';

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem,
  },
  computed: {
    ...mapGetters('airtable', [
      'getItems',
    ]),
    getPortfolioItems() {
      return this.getItems('portfolio');
    },
  },
  methods: {
    ...mapActions('airtable', [
      'fetchPortfolio',
    ]),
  },
  mounted() {
    this.fetchPortfolio();
  },
};
</script>
