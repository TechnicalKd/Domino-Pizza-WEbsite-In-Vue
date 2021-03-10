/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import { MdDrawer, MdButton, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueCarousel from 'vue-carousel'
import VueResources from 'vue-resource'





Vue.use(VueCarousel)
Vue.use(MdDrawer)
Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(VueResources)



Vue.http.options.root = "https://quick-replica-261609-default-rtdb.firebaseio.com"

new Vue({
        el: '#app',
        render: h => h(App)

    })
    /* eslint-disable */