import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    usuarios: [],
    usuario: []
  },
  getters: {
    allUsuario(state){
      return state.usuario
    }
  },
  mutations: {
    setUsuarios(state, payload){
      state.usuarios = payload
    },

    setUsuario(state, payload){
      state.usuario = payload
    }
  },
  actions: {
    async getUsuarios({commit}){
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        commit('setUsuarios', data)
      } catch (error) {
        console.log(error)
      }
    },

    async getUsuario({commit}, id){
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()

        commit('setUsuario', data)

      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
