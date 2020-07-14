import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'Home',
        component: () => import('../pages/Home')
    },
    {
        path: '/message',
        name: 'Message',
        component: () => import('../pages/Message')
    },
    {
        path: '/resume',
        name: 'Resume',
        component: () => import('../pages/Resume')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../pages/User/PersonalCenter')
    },
    {
        path: '/setting',
        name: 'Setting',
        component: () => import('../pages/User/Setting')
    }
]

const routers = new VueRouter({
    mode: 'history',
    routes
})

export default routers