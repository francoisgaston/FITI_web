import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/landing'
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import(/* webpackChunkName: "landing" */ '@/views/LandingPage')
  },
  {
    path: '/register/1',
    name: 'register1',
    component:() => import(/* webpackChunkName: "register1" */ '@/views/Register1View')
  },
  {
    path: '/register/2',
    name: 'register2',
    component:() => import(/* webpackChunkName: "register2" */ '@/views/Register2View')
  },
  {
    path: '/login',
    name: 'login',
    component:() => import(/* webpackChunkName: "login" */ '@/views/LoginView')
  },
  {
    path: '/created_routines',
    name: 'createdRoutines',
    component:() => import(/* webpackChunkName: "createdRoutines" */ '@/views/CreatedRoutinesView'),
    props: {
      language: 'es'
    }
  },
  {
    path: 'routine_details/:name',
    name: 'routine_details',
    component:() => import(/* webpackChunkName: "createdRoutines" */ '@/views/routineDetails'),
    props:true,

  },
  {
    path: '/create_routine',
    name: 'createRoutine',
    component:() => import(/* webpackChunkName: "createdRoutines" */ '@/views/CreateRutine'),
    props: {
      language: 'es'
    }
  },
  {
    path: '/favorites',
    name: 'favorites',
    component:() => import(/* webpackChunkName: "favorites" */ '@/views/FavoritesView'),
    props: {
      language: 'es'
    }
  },
  {
    path: '/resend_verification',
    name: 'resendVerification',
    component:() => import(/* webpackChunkName: "forgotUser" */ '@/views/ResendVerificationView')
  },
  {
    path: '/search',
    name: 'search',
    component:() => import(/* webpackChunkName: "search" */ '@/views/SearchResultsView'),
    props: {
      language: 'es'
    }
  },
  {
    path: '/verification',
    name: 'verification',
    component:() => import(/* webpackChunkName: "verification" */ '@/views/VerificationView'),
    props: (route)=>({user:route.query.user,code:route.query.code})
  },
  {
    path: '/created_exercises',
    name: 'createdExercises',
    component:() => import(/* webpackChunkName: "createdExercises" */ '@/views/ExercisesCreated')
  },
  // {
  //   path: '/routine_details',
  //   name: 'routineDetails',
  //   component:() => import(/* webpackChunkName: "createdExercises" */ '@/views/routineDetails')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
