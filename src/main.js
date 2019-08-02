// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import App from './App'
import router from './router'
import 'c-swipe/dist/swipe.css';
import { Swipe, SwipeItem } from 'c-swipe';

Vue.config.productionTip = false
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  // 统计代码
  if(to.path == '/product' || to.path == '/solution'){
    _hmt.push(['_trackPageview', to.fullPath]);
  }
  next();
});

