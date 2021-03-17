
import { createApp } from 'vue'
const setup = (mixins) => {
  // return new Vue({
  //   el: '#app',
  //   template: '<App/>',
  //   mixins: [...mixins]
  // });
  // mixins: [myMixin]
  // return createApp({ mixins: [...mixins]}).mount('#app');
  createApp(mixins).mount('#app');
};

export default setup;