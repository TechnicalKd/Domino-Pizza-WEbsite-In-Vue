<template>
<header>
       <div class="container clear">
           <div class="logo">
            <img :src="logoIcon">
           </div>
           <div class="nav">
             <img :src="menuIcon" @click="stateChage = !stateChage">
<md-drawer
class="md-right"
  :md-active.sync ="stateChage"
    />

           </div>
       </div>
</header>
</template>

<script>
import Logo from '../assets/images/logo.png'
import Menu from '../assets/images/menu.png'

export default {
  data () {
    return {
      logoIcon: Logo,
      menuIcon: Menu,
      stateChage: false
    }
  }
}

</script>

<style>

</style>
