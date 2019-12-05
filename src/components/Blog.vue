<template>
  <section class="section blog">
    <div class="container has-text-centered">
      <h2 class="title is-2">Blog</h2>
      <div class="columns is-multiline has-text-left">
        <BlogPost class="column is-one-third"
                  v-for="(post, key) in posts" :key="key" :post="post" />
      </div>

      <b-button type="is-success" tag="a" :href="blogUrl">
        View all posts
      </b-button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import BlogPost from '@/components/BlogPost.vue';

export default {
  name: 'Portfolio',
  components: {
    BlogPost,
  },
  data() {
    return {
      posts: [],
      blogUrl: process.env.VUE_APP_BLOG_URL,
    };
  },
  methods: {
    ...mapActions('blog', [
      'getPosts',
    ]),
  },
  mounted() {
    if (!this.$store.getters['blog/getPosts']().length) {
      this.getPosts().then(() => { this.posts = this.$store.getters['blog/getPosts'](); });
    } else {
      this.posts = this.$store.getters['blog/getPosts']();
    }
  },
};
</script>
