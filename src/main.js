import Vue from 'vue'
import App from './App.vue'
import List from './components/List.vue'
import Display from './components/Display.vue'
import Input from './components/Input.vue'
import Login from './components/Login.vue'


Vue.component('app-display', Display);
Vue.component('app-input', Input);
Vue.component('app-list', List);
Vue.component('app-login', Login);


new Vue({
  el: '#app',
  render: h => h(App),
})


