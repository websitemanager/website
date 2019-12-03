<template>
  <section class="section portfolio has-background-white-bis">
    <div class="container">
      <h2 class="title is-2 has-text-centered">Portfolio</h2>
      <h4 class="subtitle is-4 has-text-centered">A collection of I was lucky enough to contribute
        to.</h4>
      <div class="columns collection is-multiline">
        <PortfolioItem v-for="item in portfolioItems" :key="item.id" :id="item.id" class="item
                              is-one-third column" />
      </div>
    </div>
  </section>
</template>

<script>
import Airtable from 'airtable';
import api from '@/services/api';
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
  async mounted() {
    const base = new Airtable({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
    }).base(process.env.VUE_APP_AIRTABLE_PORTFOLIO_BASE);

    const getPortfolio = async () => {
      const table = base('Items');
      const records = await api.getRecords(table);

      return records.map(record => ({ id: record.getId() }));
    };

    this.portfolioItems = await getPortfolio();
  },
};
</script>
