 /* eslint-disable */
<template>
<div>

  <carousel :per-page="1" :mouse-drag="true" :paginationEnabled="false">
    <slide v-for="(slide,index) in slides" :key="index">
        <div
        class="slide_back"
        :style="{'background' : `url(${slide.bck})`}"
        >
    <div class="container slider-container">
<div class="text">
    <div>{{ slide.text }}</div>
</div>
<div class="image">
    <img :src="slide.img">
</div>
    </div>
        </div>
    </slide>
  </carousel>
</div>
</template>
  /* eslint-disable */
<script>
import { Carousel, Slide } from 'vue-carousel'
import bck from '../assets/images/slide_bck.jpg'
import bck2 from '../assets/images/slide_bck2.jpg'

import img1 from '../assets/images/pizza_one.png'
import img2 from '../assets/images/pizza_two.png'
import img3 from '../assets/images/pizza_three.png'

export default {
  data () {
    return {
      slides: [
        {
          bck: bck,
          text: 'Kdtech Software Solution',
          img: img1
        },
        { bck: bck,
          text: 'Kdtech Software Solution',
          img: img2
        },
        { bck: bck2,
          text: 'Kdtech Software Solution',
          img: img3
        }
      ]
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>

</style>
