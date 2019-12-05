<template>
  <div class="home">
    <!-- Sections -->
    <Hero />
    <About />
    <Blog />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Blog from '@/components/Blog.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'home',
  components: {
    Hero,
    About,
    Blog,
    Portfolio,
    Contact,
  },
};
</script>
