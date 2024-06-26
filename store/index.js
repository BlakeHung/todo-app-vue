import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    searchQuery: ''
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        Vue.set(state.tasks, index, updatedTask);
      }
    },
    toggleTaskCompletion(state, taskId) {
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setSearchQuery(state, query) {
      state.searchQuery = query;
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', { ...task, id: Date.now(), createdAt: new Date(), completed: false });
    },
    deleteTask({ commit }, taskId) {
      commit('deleteTask', taskId);
    },
    updateTask({ commit }, updatedTask) {
      commit('updateTask', updatedTask);
    },
    toggleTaskCompletion({ commit }, taskId) {
      commit('toggleTaskCompletion', taskId);
    },
    setSearchQuery({ commit }, query) {
      commit('setSearchQuery', query);
    }
  },
  getters: {
    allTasks: state => {
      return state.tasks.filter(task =>
        task.description.toLowerCase().includes(state.searchQuery.toLowerCase())
      ).sort((a, b) => b.createdAt - a.createdAt);
    },
    completedTasks: state => {
      return state.tasks.filter(task => task.completed && task.description.toLowerCase().includes(state.searchQuery.toLowerCase()))
        .sort((a, b) => b.createdAt - a.createdAt);
    },
    uncompletedTasks: state => {
      return state.tasks.filter(task => !task.completed && task.description.toLowerCase().includes(state.searchQuery.toLowerCase()))
        .sort((a, b) => b.createdAt - a.createdAt);
    }
  }
});
