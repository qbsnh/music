import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/view/HomePage'
import SearchSongs from '@/view/SearchSongs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/search',
      name: 'SearchSong', 
      component: SearchSongs,
      
    },
   
   
  ]
})
