import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  todos: []
}

const getters = {
  getAllTodos: (state) => {
    return state.todos
  }
}

const actions = {
  searchTodos: (state, searchTerm) => {
    state.todos.filter((todo) => {
      return todo.text.indludes(searchterm)
    })
  }
}

const mutations = {
  initialSetTodos: (state) => {
    state.todos = data
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: debug
})
