import vueRouter from 'vue-router'
import Login from './components/Login'
import Registro from './components/Registro'
import App from './App'
import Home from './components/Home'
import Ingresos from './components/Ingresos'
import Egresos from './components/Egresos'


const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
           path: '/',
           name: "root",
           component: App
        },
        {
            path: '/home',
            name: "home",
            component: Home
         },
        {
            path: '/login',
            name: "log",
            component: Login
        },
        {
            path: '/registro',
            name: "registro",
            component: Registro
        },
        {
            path: '/egresos',
            name: "egresos",
            component: Egresos
        },
        {
            path: '/ingresos',
            name: "ingresos",
            component: Ingresos
        },
    ]
})
export default router
