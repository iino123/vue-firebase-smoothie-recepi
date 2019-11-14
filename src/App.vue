<template>
  <div class="home">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'navbar',
  components: {
    Navbar
  }
}
</script>
