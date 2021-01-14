import {createRouter,createWebHashHistory} from 'vue-router'
// import dee from '../views/detail.vue'
let router = createRouter({
   history: createWebHashHistory(),
   routes:[
     {
       path:'/',
       component: () => import('../views/index.vue')
    }
   ]
  }
);
export default router;