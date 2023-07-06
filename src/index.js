import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Drawer from '@/components/Drawer/Drawer.vue'
import Switch from '@/components/Switch/Switch.vue'
import { Swipe, SwipeItem } from 'vant';
import App from '@/App.vue';
import store from '@/store'
import router from './router';



Vue.use(Swipe);
Vue.use(SwipeItem);
// Vue.use(Dialog)
dayjs.extend(relativeTime);
Vue.prototype.dayjs = dayjs;
Vue.component('Drawer',Drawer)
Vue.component('v-switch',Switch)


import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.component('Icon', Icon);
const vm = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    created(){
      // console.log(this.$store) //每一个都能拿到state
    },
    data: {
      swiper: null
    },
    // render: h => h(HomeView),
    mounted() {
      // this.initSwiper();
    },
    methods: {
    }
});
// console.log(vm);

