<template>
  <div class="home">
    <!-- Sections -->
    <Hero />
    <About />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Portfolio from '@/components/Portfolio.vue';
import Contact from '@/components/Contact.vue';

export default {
  name: 'home',
  components: {
    Hero,
    About,
    Portfolio,
    Contact,
  },
};
</script>
