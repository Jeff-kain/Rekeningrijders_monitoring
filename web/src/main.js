// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import request from './utils/request'
import lang from './lang'
import iView from 'iview'
import vuepaypal from 'vue-paypal-checkout'

import 'iview/dist/styles/iview.css';

Vue.use(vuepaypal)
Vue.use(iView);
Vue.use(lang);

Vue.prototype.$http = request
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<app/>',
    components: { app }
})