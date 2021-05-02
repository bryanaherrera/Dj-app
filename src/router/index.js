import { createRouter, createWebHistory } from "vue-router";


/// IMport our pages componenets 

import Home from "../pages/landingPage.vue"
import DjHomepage from "../pages/djHomepage.vue"
import QueuePage from "../pages/queuePage.vue"

// Define our Routes 

const routes =[
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/homepage",
        name: "DJhome",
        component: DjHomepage
    },
    {
        path: "/queue",
        name: "Queue",
        component: QueuePage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
