import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const fakeTodos = [
  { name: 'one', description: 'i am a todo' },
  { name: 'two', description: 'i am a todo too!' },
  { name: 'tres', description: 'yo soy un todo' }
]

const store = new Vuex.Store({
  state: {
    authState: undefined,
    user: undefined,
    // todos: [],
    todos: [ ...fakeTodos ], // ! TESTING
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todo) {
      const index = state.todos.findIndex(todo);
      if (index !== -1) state.todos.splice(index, 1);
    },
    setAuthState(state, authState) {
      state.authState = authState;
    },
    setUser(state, user) {
      state.user = user;
    },
  }
});

export default store;
