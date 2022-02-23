<template>
  <div>
    <the-navigation></the-navigation>

      <router-view></router-view>


    
  </div>
</template>
<script>
import TheNavigation from "./components/shared/TheNavigation.vue"


export default {

  name: 'App',
  components: {
    TheNavigation 
    
  }
}
</script>
<style>

</style>
