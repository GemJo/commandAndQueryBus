import { createRouter, createWebHistory } from 'vue-router'
import CommandBus from "@/views/CommandBus.vue";
import QueryBus from "@/views/QueryBus.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/command',
      name: 'command',
      component: CommandBus,
    },
    {
      path: '/query',
      name: 'query',
      component: QueryBus,
    }
  ]
})

export default router
