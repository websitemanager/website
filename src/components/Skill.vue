<template>
  <div class="skill">
    <div v-if="loading" class="loading">
      <half-circle-spinner :animation-duration="1000" :size="30" color="#73A839" />
    </div>

    <div v-if="!loading">
      <h6 class="skill-name title is-6">{{ skill.name }}</h6>
      <b-progress type="is-success" :value="skill.value * 10"
                  class="skill-value"></b-progress>
      <b-taglist class="skill-items">
        <b-tag type="is-info" v-for="item in skill.items" :key="item.id">
          <a :href="item.link">{{ item.name }}</a>
        </b-tag>
      </b-taglist>
    </div>
  </div>
</template>

<script>
import Airtable from 'airtable';
import { HalfCircleSpinner } from 'epic-spinners';
import api from '@/services/api';

export default {
  name: 'Skill',
  props: {
    id: String,
  },
  components: {
    HalfCircleSpinner,
  },
  data() {
    return {
      skill: {},
      loading: true,
    };
  },
  async mounted() {
    const base = new Airtable({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
    }).base(process.env.VUE_APP_AIRTABLE_SKILLS_BASE);

    const getItem = async (id) => {
      const table = base('Items');
      const item = await api.getRecord(table, id);

      return {
        id: item.id,
        name: item.Name,
        link: item.Link,
      };
    };

    const getSkillItems = async (id) => {
      const table = base('Skills');
      const record = await api.getRecord(table, id);

      const skillItems = [];

      // eslint-disable-next-line
      for (const item of record.Items) {
        // eslint-disable-next-line
        const i = await getItem(item);
        skillItems.push(i);
      }

      this.loading = false;

      return {
        id: record.id,
        name: record.Name,
        value: record.Value,
        items: skillItems,
      };
    };

    this.skill = await getSkillItems(this.id);
  },
};
</script>

<style lang="scss" scoped>
.skill {
  .skill-name, .skill-value {
    margin-bottom: 0.5rem;
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .loading {
    padding: 3rem 0;

    .half-circle-spinner {
      margin: 0 auto;
    }
  }
}
</style>
