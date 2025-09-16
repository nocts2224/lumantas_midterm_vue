import { createRouter, createWebHistory} from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import FetchImage from '../pages/FetchImage.vue'
import RegisterForm from '../pages/RegisterForm.vue'
import GaragePage from '../pages/GaragePage.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutPage},
    {path: '/register', component: RegisterForm},
    {path: '/fetch', component: FetchImage},
    {path: '/garage', component: GaragePage},
    {path: '/fetch', component: FetchImage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;