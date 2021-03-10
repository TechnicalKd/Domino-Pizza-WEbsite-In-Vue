 /* eslint-disable */
<template>
  <div id="app">
    <Header/>
   <carosel/>
      <div>
       <menuCard/>
      </div>
    <Footer/>
  </div>
</template>

<script>

import Header from './components/header.vue'
import Footer from './components/footer.vue'
import carosel from './components/carosel.vue'
import menuCard from './components/menu.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer,
    carosel,
    menuCard
  }
}
</script>

<style>

@import  './assets/style.css';

</style>
 /* eslint-disable */
