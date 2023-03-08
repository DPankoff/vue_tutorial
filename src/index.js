import HomeViewVue  from './components/HomeView.vue'
import AboutView    from './components/AboutView.vue'
import HomePageVue  from './views/HomePage.vue'
import TodosPage    from './views/TodosPage.vue'

export const routes = [
    {path: '/',         component : HomeViewVue},
    {path: '/about',    component : AboutView},
    {path: '/planner',  component: HomePageVue},
    {path: '/todos',    component: TodosPage}
]