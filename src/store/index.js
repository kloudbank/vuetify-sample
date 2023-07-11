import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const userStore = createStore({
    state: {
        username: null,
    },
    mutations: {
        login: function (state, payload) {
            state.username = payload.username
        },
        logout: function (state) {
            state.username = null
        },
    },
    plugins: [createPersistedState()],
})

export default userStore
