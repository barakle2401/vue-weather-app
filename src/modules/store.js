import Vue from 'vue'
import Vuex from 'vuex'
import { OPEN_WEATHER_API_KEY } from "../common/constants"
import axios from 'axios'
import { capitalEveryFirstLetter } from "../common/functions"
Vue.use(Vuex)
const store = new Vuex.Store({

    state: {
        searchValue: '',
        currentWeather: {},
        forecast: {},
        loading: false,
        dataExist: false
    },
    mutations: {
        setSearchValue(state, city) {
            state.searchValue = capitalEveryFirstLetter(city)
        },
        setForecast(state, forecast) {

            state.forecast = forecast;
        },
        setCurrentWeather(state, weather) {
            state.currentWeather = weather;
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setDataExist(state, payload) {
            state.dataExist = payload
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
                    commit('setForecast', forecast);
                    commit('setCurrentWeather', weather);
                    commit('setDataExist', true)

                }))
                .catch(function (res) {

                    alert(res.message)

                    commit('setDataExist', false)
                })
                .finally(() => {
                    commit('setLoading', false)

                })
        }
    },
    getters: {

        searchValue: state => {
            return state.searchValue
        },
        forecast: state => {

            return state.forecast.list
        }
    }

})
export default store