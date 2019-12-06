import Airtable from 'airtable';
import marked from 'marked';
import api from '@/services/api';

const airtable = new Airtable({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
});

const skillsBase = airtable.base(process.env.VUE_APP_AIRTABLE_SKILLS_BASE);
const portfolioBase = airtable.base(process.env.VUE_APP_AIRTABLE_PORTFOLIO_BASE);

export default {
  namespaced: true,
  state: {
    skills: [],
    portfolio: [],
    portfolioItem: {},
  },
  getters: {
    getItem: state => (type, id) => (
      state[type].find(item => item.id === id) || { loaded: false }
    ),
    getItems: state => type => (state[type]),
    getPortfolioItem: state => () => (state.portfolioItem),
  },
  mutations: {
    addItem: (state, { type, item }) => {
      state[type].push(item);
    },
    updateItem: (state, { type, item }) => {
      const key = state[type].find(i => i.id === item.id);
      Object.assign(key, item);
    },
    setPortfolioItem: (state, item) => {
      state.portfolioItem = item;
    },
  },
  actions: {
    fetchSkills: async ({ commit, getters }) => {
      if (getters.getItems('skills').length > 0) {
        return;
      }

      const table = skillsBase('Skills');
      const records = await api.getRecords(table);

      records.forEach((record) => {
        commit('addItem', {
          type: 'skills',
          item: { id: record.getId(), loaded: false },
        });
      });
    },
    fetchSkillItems: async ({ commit, getters }, id) => {
      if (getters.getItem('skills', id).loaded) {
        return;
      }

      const getItem = async (itemID) => {
        const table = skillsBase('Items');
        const item = await api.getRecord(table, itemID);

        return {
          id: item.id,
          name: item.Name,
          link: item.Link,
        };
      };

      const table = skillsBase('Skills');
      const record = await api.getRecord(table, id);

      const skillItems = [];

      // eslint-disable-next-line
      for (const item of record.Items) {
        // eslint-disable-next-line
        const i = await getItem(item);
        skillItems.push(i);
      }

      commit('updateItem', {
        type: 'skills',
        item: {
          id: record.id,
          name: record.Name,
          value: record.Value,
          items: skillItems,
          loaded: true,
        },
      });
    },
    fetchPortfolio: async ({ commit, getters }) => {
      if (getters.getItems('portfolio').length > 0) {
        return;
      }

      const table = portfolioBase('Items');
      const records = await api.getRecords(table);

      records.forEach((record) => {
        commit('addItem', {
          type: 'portfolio',
          item: { id: record.getId(), loaded: false },
        });
      });
    },
    fetchPortfolioItem: async ({ commit, getters }, id) => {
      if (getters.getItem('portfolio', id).loaded) {
        return;
      }

      const table = portfolioBase('Items');
      const item = await api.getRecord(table, id);

      commit('updateItem', {
        type: 'portfolio',
        item: {
          id: item.id,
          name: item.Name,
          link: item.Link,
          thumbnail: item.Thumbnail[0].url,
          image: item.Image[0].url,
          description: item.Description ? marked(item.Description, { smartypants: true }) : '',
          contributions: item.Contributions ? marked(item.Contributions, { smartypants: true }) : '',
          loaded: true,
        },
      });
    },
    fetchPortfolioDetails: async ({ commit, state }, itemID) => {
      let item = state.portfolio.find(i => i.id === itemID);

      // If the item is not yet available in the store then just include it.
      if (!item) {
        const table = portfolioBase('Items');
        const details = await api.getRecord(table, itemID);

        item = {
          id: details.id,
          name: details.Name,
          link: details.Link,
          thumbnail: details.Thumbnail[0].url,
          image: details.Image[0].url,
          description: details.Description ? marked(details.Description, { smartypants: true }) : '',
          contributions: details.Contributions ? marked(details.Contributions, { smartypants: true }) : '',
          loaded: true,
        };
      }

      commit('setPortfolioItem', item);
    },
  },
};
