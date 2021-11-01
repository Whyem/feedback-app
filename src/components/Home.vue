<template>
  
  <div class="home_container fd-bm flex--jc flex--as ">
    <SideNav />
    
    <div class="feedbacks_container">
      <TopNav />

      <FeedBacks />
    </div>
  </div>


  

  
</template>

<script>
import SideNav from './SideNav.vue'
import TopNav from './TopNav.vue'
import FeedBacks from './FeedBacks.vue'

export default {
  name: 'Home',
  components: {
    SideNav,
    TopNav,
    FeedBacks
  }
}
</script>

<style lang="scss" scoped>
  .home_container{
    width: 77%;
    margin: 0 auto;
  }

  .feedbacks_container{
    width: 100%;
  }

@media (max-width: 768px) {
  
  .home_container{
    width: 90%;
  }
}

@media (max-width: 376px) {
  
  .home_container{
    width: 100%;
  }
}


</style>
