import Vue from "vue";
import Router from "vue-router";
import SignIn from "./views/SignIn.vue";

Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        name: "signIn",
        component: SignIn
    }]
})
