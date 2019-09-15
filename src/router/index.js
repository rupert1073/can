import Vue from 'vue'
import VueRouter from 'vue-router'
// import Bootstrap vue
import BootstrapVue from 'bootstrap-vue'
// Adds a loading bar at the top during page loads.
import NProgress from 'nprogress/nprogress'
// Import Application Store management
import {store} from '@state'
import routes from './routes'
// Use Router
Vue.use(VueRouter)
// Use Vue Moment 
Vue.use(require('vue-moment'));
// Use Bootstrap
Vue.use(BootstrapVue);
// Define router from a VueRouter object and assign routes with mode
const router = new VueRouter({
    routes,
    // Use the HTML5 history API (i.e. normal-looking routes)
    // instead of routes with hashes (e.g. example.com/#/about).
    // This may require some server configuration in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    mode: 'history',
    // Simulate native-like scroll behavior when navigating to a new
    // route and using back/forward buttons.
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
})
// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
    // If this isn't an initial page load...
    if (routeFrom.name !== null) {
      // Start the route progress bar.
      NProgress.start()
    }
    // Check if auth is required on this route
    // (including nested routes).
    const authRequired = routeTo.matched.some(route => route.meta.authRequired)
    // If auth isn't required for the route, just continue.
    if (!authRequired) return next()
    
    // NOT IN THIS DEMO
    // Basically if authentication is required we will call authentication method which checks if user is logged in or not
    if (store.getters['auth/loggedIn']) {
      return next() 
    }else{
      redirectToLogin()
    }// If auth is required and the user is NOT currently logged in,
    // redirect to login.
    redirectToLogin()
    function redirectToLogin() {
      // Pass the original route to the login component
      next({ path: '/register'})
    }
})
  
// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
// Complete the animation of the route progress bar.
    NProgress.done()
})

 
export default router 