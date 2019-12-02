<template>
  <div class="item">
    <div v-if="loading" class="loading">
      <half-circle-spinner :animation-duration="1000" :size="30" color="#73A839" />
    </div>

    <div v-if="!loading">
      <router-link :to="{ name: 'portfolioItemDetail', params: { id: item.id } }" class="card
                        is-block">
        <div class="card-image">
          <figure class="image is-16by9">
            <img :src="item.thumbnail" alt="item.name">
          </figure>
        </div>
        <div class="card-content">
          <h5 class="title is-5">{{ item.name }}</h5>
          <div class="content" v-html="item.description" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Airtable from 'airtable';
import { HalfCircleSpinner } from 'epic-spinners';
import api from '@/services/api';

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
      item: {},
      loading: true,
    };
  },
  async mounted() {
    const base = new Airtable({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
    }).base(process.env.VUE_APP_AIRTABLE_PORTFOLIO_BASE);

    const getItem = async (id) => {
      const table = base('Items');
      const item = await api.getRecord(table, id);

      this.loading = false;

      return {
        id: item.id,
        name: item.Name,
        link: item.Link,
        thumbnail: item.Thumbnail[0].url,
        description: item.Description,
      };
    };

    this.item = await getItem(this.id);
  },
};
</script>

<style lang="scss" scoped>
.item {
  .loading {
    padding: 5rem 0;

    .half-circle-spinner {
      margin: 0 auto;
    }
  }
}
</style>
