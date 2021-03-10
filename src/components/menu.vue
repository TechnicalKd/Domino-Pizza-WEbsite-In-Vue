<template>
  <div>
      <div class="container menu_container">
          <div class="top">
              <h2>menu</h2>
          </div>
          <div class="buttons">
              <md-button
                v-for="(button,index) in buttons" :key="index"
                @click="changeMenu(button.name)"
                :class="button.active  ?  'md-raised'  : '' "
              >{{ button.name }}</md-button>
          </div>
          <div class="product-items">
              <md-card
                v-for="(product,index) in products" :key="index"
              >
                 <md-card-media md-ratio="16:9">
                        <img :src="require(`../assets/images/products/${product.img}`) "/>
                 </md-card-media>
              </md-card>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buttons: [
        {name: 'pizza', active: true},
        {name: 'burgers', active: false},
        {name: 'salat', active: false},
        {name: 'dessert', active: false}
      ],
      products : [],
    }
  },

  methods: {
    changeMenu (value) {
      this.buttons.forEach((item) => {
        if (item.name === value) {
          item.active = true
        } else {
          item.active = false
        }
      })
    }
  },
  created () {
    this.$http.get('products.json')
      .then(response => response.json())
      .then(data => {
        let list = []
        for (let key in data) {
          list.push({
            ...data[key],
            id: key
          })
        }
      this.products = list
      })
  }
}
</script>

<style>
.md-card{
width:32%;
margin-bottom: 20px;
}

.product-items{
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
    /* eslint-disable */
