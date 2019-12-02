<template>
  <div class="portfolio-item">
    <PortfolioDetail :id="$route.params.id" />
  </div>
</template>

<script>
import PortfolioDetail from '@/components/PortfolioDetail.vue';

export default {
  name: 'home',
  components: {
    PortfolioDetail,
  },
};
</script>
