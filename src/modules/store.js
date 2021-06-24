
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const store = new Vuex.Store({

    state: {
        searchValue: ''
    },
    mutations: {
        setSearchValue(state, value) {
            state.searchValue = value
        }
    },
    actions: {

        setSearchValue({ commit }, value) {

            commit('setSearchValue', value)
        },
        submitSearch(value) {
            console.log(value);
            Vue.axios.get('api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}').then((response) => {
                console.log(response.data)
            })
        }
    },
    getters: {

    }

})
export default store