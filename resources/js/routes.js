import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import  dei componenti che fungono da pagina
import AboutUS from './components/AboutUs.vue'
import HomePage from './components/HomePage.vue'

import PostIndex from './views/Pages/posts/PostIndex.vue'
import PostShow from './views/Pages/posts/PostShow.vue'


const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUS
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostIndex
        },
        {
            path: '/posts/:id',
            name: 'single-post',
            component: PostShow
        },

    ]
})

export default router;
