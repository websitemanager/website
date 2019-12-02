<template>
  <div class="item">
    <div v-if="loading" class="loading">
      <half-circle-spinner :animation-duration="1000" :size="30" color="#73A839" />
    </div>

    <div v-if="!loading">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="item.thumbnail" alt="item.name">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
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
