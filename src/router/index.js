import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage'
import AddSport from '../pages/AddSport'
import PageSearch from '../pages/PageSearch'


const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "AddSport",
        path: "/addSport",
        component: AddSport
    },
    {
        name: "PageSearch",
        path: "/pageSearch",
        component: PageSearch
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router