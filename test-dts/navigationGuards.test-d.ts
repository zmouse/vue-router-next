import { createRouter, createWebHistory } from './index'
import { expectError } from 'tsd'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

router.beforeEach((to, from) => {
  return { path: '/' }
})

router.beforeEach((to, from) => {
  return '/'
})

router.beforeEach((to, from) => {
  return false
})

expectError(
  router.beforeEach((to, from, next) => {
    return false
  })
)
