import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage'
import AddSport from '../pages/AddSport'


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
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router