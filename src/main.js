import Vue from 'vue';
import App from './App.vue';
// import Swiper from 'vue-swiper';

Vue.config.productionTip = false;

// Vue.component('swiper', Swiper);

import VueAwesomeSwiper from 'vue-awesome-swiper';

// require styles
// import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App),
}).$mount('#app')
