require("./bootstrap");
import router from "./routes";
import VueRouter from "vue-router";
import Index from "./components/Index.vue";

window.Vue = require("vue");

// Instantiation of VueRouter
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: {
        index: Index
    }
});
