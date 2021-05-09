import { createRouter, createWebHistory } from "vue-router";


/// IMport our pages componenets 

import Home from "../pages/landingPage.vue"
import DjHomepage from "../pages/djHomepage.vue"
import QueuePage from "../pages/queuePage.vue"
import LogIn from "../pages/logIn.vue"
import NewEvent from "../pages/newEvent.vue"
import Register from "../pages/signUp.vue"
import Event from "../pages/djEventPage.vue"
import Name from "../pages/name.vue"

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
    },
    {
        path: "/login",
        name: "LogIn",
        component: LogIn
    },
    {
        path: "/newEvent",
        name: "New Event",
        component: NewEvent
    },
    {
        path: "/signup",
        name: "Register",
        component: Register
    },
    {
        path: "/event",
        name: "Event",
        component: Event
    },
    {
        path: "/name",
        name: "Name",
        component: Name
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
