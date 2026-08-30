import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: { render: () => null },
      meta: { requireAuth: false },
    },
  ],
})
