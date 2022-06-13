<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <amplify-sign-out v-if="authenticated"></amplify-sign-out>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Nick's Todos</v-toolbar-title>
      <amplify-sign-out v-if="user" right></amplify-sign-out>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <amplify-authenticator
          username-alias="email"
          v-if="!authenticated"
        >
          <amplify-sign-in></amplify-sign-in>
        </amplify-authenticator>
        <TodoConsole v-else/>
      </v-container>
    </v-main>

    <v-footer app>
      <span>Copyright 2022 Nick Ray - because this is valuable</span>
    </v-footer>
  </v-app>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import authStates from './utils/authStates';
const { SIGNED_IN } = authStates;

export default {
  name: 'App',
  components: {
    TodoConsole: () => import('./components/TodoConsole.vue'),
  },
  data: () => ({
    drawer: false,
    unsubscribeAuth: undefined,
  }),
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.$store.commit('setAuthState', authState);
      this.$store.commit('setUser', authData);
    });
  },
  computed: {
    authState() {
      return this.$store.state.authState;
    },
    authenticated() {
      return this.authState === SIGNED_IN && !!this.user;
    },
    user() {
      return this.$store.state.user;
    },
  },
  beforeUnmount() {
    this.unsubscribeAuth();
  },
};
</script>

<style scoped>
.authenticated-view {
  max-width: 80vw;
}
</style>