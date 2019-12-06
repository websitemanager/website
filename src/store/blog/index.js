const blogUrl = process.env.VUE_APP_BLOG_URL;

export default {
  namespaced: true,
  state: {
    posts: [],
  },
  getters: {
    getPosts: state => (state.posts),
  },
  mutations: {
    addPost: (state, item) => {
      state.posts.push(item);
    },
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      try {
        const response = await fetch(`${blogUrl}/post/index.json`);
        const body = await response.json();
        const posts = body.data.items;

        posts.slice(0, 3).forEach((post) => {
          commit('addPost', post);
        });
      } catch (error) {
        // Don't do anything.
      }
    },
  },
};
