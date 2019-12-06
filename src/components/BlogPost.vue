<template>
  <div class="post">
    <a :href="processPost.permalink" class="image is-block">
      <figure class="image is-16by9">
        <img v-lazy="processPost.image" :alt="processPost.title" :title="processPost.title" />
      </figure>
    </a>

    <h5 class="title is-5"><a :href="processPost.permalink">{{ processPost.title }}</a></h5>
    <div class="content">
      <p v-html="processPost.summary" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    post: {},
  },
  computed: {
    processPost() {
      return {
        title: this.post.title,
        image: this.post.image,
        summary: this.post.summary,
        permalink: this.post.permalink,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.post a.image {
  margin-bottom: 1em;

  img {
    border-radius: 10px;
  }
}

img[lazy='loaded'] {
  opacity: 0;
  animation-name: fadein;
  animation-duration: .5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
