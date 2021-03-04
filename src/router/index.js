import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About' //route for about 

const routes = [
    {
        path: '/',
        name: '/Home',
        component: Home,
    },
    {
        path: '/about',
        name: '/About',
        component: About,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
//after douing this for the router in the index.js 
// then you import it in the main.js