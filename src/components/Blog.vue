<template>
  <section class="section blog">
    <div class="container has-text-centered">
      <h2 class="title is-2">Blog</h2>
      <div class="columns is-multiline has-text-left">
        <BlogPost class="column is-one-third"
                  v-for="(post, key) in getPosts" :key="key" :post="post" />
      </div>

      <b-button type="is-success" tag="a" :href="blogUrl">
        View all posts
      </b-button>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import BlogPost from '@/components/BlogPost.vue';

export default {
  name: 'Blog',
  components: {
    BlogPost,
  },
  computed: {
    ...mapGetters('blog', [
      'getPosts',
    ]),
  },
  data() {
    return {
      blogUrl: process.env.VUE_APP_BLOG_URL,
    };
  },
  methods: {
    ...mapActions('blog', [
      'fetchPosts',
    ]),
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
