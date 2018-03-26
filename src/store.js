import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const BASE_URL = "https://galvanize-votes2.herokuapp.com";

export default new Vuex.Store({
    state: {
        topics: []
    },
    mutations: {
        listTopics(state, payload){
            state.topics = payload.topics;
        }
    },
    actions: {
        listTopics(store){
            const topics = [{
                title: "First Title"
            },{
                title: "Second Title"
            },{
                title: "Third Title"
            }];
            fetch(`${BASE_URL}/topics`)
                .then(response => response.json())
                .then(({topics}) => {
                    store.commit("listTopics", {topics});
                });
        }
    }
})
