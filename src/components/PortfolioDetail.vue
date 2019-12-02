<template>
  <section class="hero portfolio-detail is-medium">
    <b-loading :active.sync="loading" :can-cancel="true"></b-loading>

    <div class="hero-body">
      <div v-if="!loading">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <figure class="image is-16by9">
                <img :src="item.image" alt="item.name">
              </figure>
            </div>
            <div class="column is-half">
              <h3 class="title is-3">{{ item.name }}</h3>
              <div class="content" v-html="item.description"></div>
              <div class="content" v-html="item.contributions"></div>
              <b-button type="is-link" tag="a" :href="item.link" target="_blank">
                Visit site
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Airtable from 'airtable';
import api from '@/services/api';

export default {
  name: 'PortfolioDetail',
  props: {
    id: String,
  },
  data() {
    return {
      loading: true,
      item: {},
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
        image: item.Image[0].url,
        description: item.Description,
        contributions: item.Contributions,
      };
    };

    this.item = await getItem(this.id);
  },
};
</script>
