<template>
  <div class="home">
    <!-- Sections -->
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';

export default {
  jame: 'home',
  components: {
    Hero,
    About,
  },
};
</script>
