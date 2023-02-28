import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import TodosPage from '@/views/TodosPage.vue';
import PiniaView from '@/views/PiniaView.vue';


const routes = [
    {
      path: "/",
       component: HomePage,
    },
    {
      path: "/todos",
      component: TodosPage,
    },
    {
      path: "/pinia",
      component: PiniaView,
    },
  ];

const router = createRouter({
    history : createWebHistory(),
    routes, 
 });

 export default router;