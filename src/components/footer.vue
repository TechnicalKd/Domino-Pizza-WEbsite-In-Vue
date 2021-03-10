<template>
<footer>

        <div class="container">
            <img :src="logoIcon">
            <div class="contact">
                Call Us:
                9975067357
            </div>
        </div>

</footer>
</template>

<script>
import Logo from '../assets/images/logo.png'

export default {
  data () {
    return {
      logoIcon: Logo
    }
  }
}

</script>

<style>
</style>
