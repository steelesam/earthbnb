import Bookables from "./bookables/Bookables";
import BookableListItem from "./bookables/BookableListItem";
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/second",
        component: BookableListItem,
        name: "second"
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
