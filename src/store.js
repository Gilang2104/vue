import { createStore } from 'vuex'

export default createStore({
  state: {
    names: [],
    ages: [],
    phones: [] 
  },
  mutations: {
    addName(state, { name, age, phone }) {
      state.names.push(name)
      state.ages.push(age)
      state.phones.push(phone) 
    },
    editName(state, { index, newName, newAge, newPhone }) {
      state.names[index] = newName
      state.ages[index] = newAge
      state.phones[index] = newPhone 
    },
    deleteName(state, index) {
      state.names.splice(index, 1)
      state.ages.splice(index, 1)
      state.phones.splice(index, 1) 
    }
  },
  actions: {
    addName({ commit }, { name, age, phone }) {
      commit('addName', { name, age, phone })
    },
    editName({ commit }, payload) {
      commit('editName', payload)
    },
    deleteName({ commit }, index) {
      commit('deleteName', index)
    }
  },
  getters: {
    getNames: state => state.names,
    getAges: state => state.ages,
    getPhones: state => state.phones 
  }
})
