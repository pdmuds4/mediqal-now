import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import WriterLogin from '../views/WriterLogin.vue'
import WriterProfile from '../views/WriterProfile.vue'
import WriterHome from '../views/WriterHome.vue'
import WriterView from '../views/WriterView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Mediqal now - ホーム'
      }
    },
    {
      path: '/writer-home',
      name: 'WriterHome',
      component: WriterHome,
      meta: {
        title: 'Mediqal now - ホーム'
      }
    },
    {
      path: '/writer-view',
      name: 'WriterView',
      component: WriterView,
      meta: {
        title: 'Mediqal now - 閲覧'
      }
    },
    {
      path: '/writer-login',
      name: 'WriterLogin',
      component: WriterLogin,
      meta: {
        title: 'Mediqal now - ログイン'
      }
    },
    {
      path: '/writer-profile',
      name: 'WriterProfile',
      component: WriterProfile,
      meta: {
        title: 'Mediqal now - プロフィール'
      }
    }
  ]
})

const DEFAULT_TITLE = 'Mediqal now';

router.afterEach((to) => {
  document.title = to.meta.title ?? DEFAULT_TITLE
})

export default router
