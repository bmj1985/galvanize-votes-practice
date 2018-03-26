import Vue from "vue";
import Router from "vue-router";
import SignIn from "./views/SignIn.vue";
import Topics from "./views/Topics.vue";
import TopicList from "./views/TopicList.vue";

Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        name: "signIn",
        component: SignIn
    },{
        path: "/topics",
        component: Topics,
        children: [{
            path: "/",
            name: "topicList",
            component: TopicList
        }]
    }]
})
