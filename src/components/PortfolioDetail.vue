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
    </div>
  </section>
</template>

<script>
import marked from 'marked';
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
        description: item.Description ? marked(item.Description, { sanitize: true }) : '',
        contributions: item.Contributions ? marked(item.Contributions, { sanitize: true }) : '',
      };
    };

    this.item = await getItem(this.id);
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
