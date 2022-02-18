import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage'
import AddGame from '../pages/AddGame'

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "AddGame",
        path: "/addGame",
        component: AddGame
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router