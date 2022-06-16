import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage'
import Login from '../pages/Login'
import AuthorPanel from '../pages/AuthorPanel'
import PostPage from '../pages/PostPage'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: '/author-panel',
    name: 'AuthorPanel',
    component: AuthorPanel,
    meta: {
      title: "Author Panel",
    },
  },
  {
    path: '/post/:id',
    name: 'PostPage',
    component: PostPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
