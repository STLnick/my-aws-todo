<template>
  <v-card outlined elevation="2" max-width="80vw">
    <v-row>
      <h2>Todo Console</h2>
    </v-row>
    <v-row v-for="(todo, i) in todos" :key="`todo-${i}`">
      <v-col cols="2">
        Completed?
      </v-col>
      <v-col cols="5">
        {{ todo.name }}
      </v-col>
      <v-col cols="5">
        {{ todo.description }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'TodoConsole',
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  }
};
</script>
