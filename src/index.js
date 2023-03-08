import HomeViewVue from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'

export const routes = [
    {path: '/',      component : HomeViewVue},
    {path: '/about', component : AboutView}
]