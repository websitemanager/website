<template>
  <div class="home">
    <!-- Sections -->
    <Hero />
    <About />
    <Portfolio />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Portfolio from '@/components/Portfolio.vue';

export default {
  jame: 'home',
  components: {
    Hero,
    About,
    Portfolio,
  },
};
</script>
