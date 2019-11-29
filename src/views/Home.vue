<template>
  <div class="home">
    <!-- Sections -->
    <Hero />
    <About />
    <Skills />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';

export default {
  jame: 'home',
  components: {
    Hero,
    About,
    Skills,
  },
};
</script>
