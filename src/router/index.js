import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignInView.vue'
import CreateAccount from '../components/signInComponent/CreateAccount.vue'
import LogIn from '../components/signInComponent/LogIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    //#region // * SignIn
    {
      path: '/',
      name: 'signin',
      component: SignIn,
      children: [
        {
          path: 'login',
          name : "login",
          component: LogIn,
        },
        {
          path: 'register',
          name : "register",
          component: CreateAccount,
        }
      ]
    },
    //#endregion

    {
      path: '/home',
      name: 'home',
      component: HomeView
    },

    {
      path: '/account',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AccountView.vue')
    }

  ]
})

export default router
