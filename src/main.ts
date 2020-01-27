import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { 
  MdApp,
  MdButton, 
  MdContent,
  MdDrawer,
  MdIcon,
  MdList,
  MdTabs,
  MdToolbar,
} from 'vue-material/dist/components';

Vue.config.productionTip = false;

import 'vue-material/dist/vue-material.min.css';

Vue.use(MdApp)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdDrawer)
Vue.use(MdIcon)
Vue.use(MdList)
Vue.use(MdTabs)
Vue.use(MdToolbar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");