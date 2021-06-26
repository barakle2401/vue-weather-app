
import Vue from 'vue'
import Vuex from 'vuex'
import { OPEN_WEATHER_API_KEY } from "../common/constants"
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({

    state: {
        searchValue: '',
        currentWeather: {},
        forecast: [],
        loading: false
    },
    mutations: {
        setSearchValue(state, value) {
            state.searchValue = value
        },
        setApiResponse(state, response) {
            state.currentWeather = response.weather;
            state.forecast = response.forecast;
        },
        setLoading(state, payload) {
            state.loading = payload
        }
    },
    actions: {

        setSearchValue({ commit }, value) {

            commit('setSearchValue', value)
        },
        submitSearch({ commit }, value) {
            commit('setLoading', true)
            const cityName = value
            const weatherUrl = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${OPEN_WEATHER_API_KEY}&units=metric`);
            const forecastUrl = axios.get(`https://api.openweathermap.org/data/2.5/forecast/?q=${cityName}&APPID=${OPEN_WEATHER_API_KEY}&units=metric&cnt=8`);
            axios.all([weatherUrl, forecastUrl])
                .then(axios.spread((...responses) => {

                    const weather = responses[0].data;
                    const forecast = responses[1].data;
                    commit('setApiResponse', { weather, forecast });

                }))
                .catch(function (res) {
                    console.log(res.message);
                    alert(res.message)
                    commit('setApiResponse', {});
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        }
    },
    getters: {

        forecast: state => {

            return state.forecast.list
        }
    }

})
export default store