<template>
  <v-container class="dashboard">
    <v-card width="360" class="ma-auto">
      <img
        alt="Lodestone Logo"
        class="logo"
        src="../assets/img/android-chrome-192x192.png"
        width="125"
        height="125"
      />
      <div>
        <h1>DashboardView</h1>
      </div>
      <p>DrawerLeft State is: {{ menuStore.drawerLeft }}</p>
      <button @click="menuStore.toggleDrawerLeft()">Toggle</button>
      <v-spacer></v-spacer>
      <h2>Users</h2>
      <div class="user-container">
        <div
          class="user"
          v-for="(user, index) in AccountService"
          :name="user.name"
          :email="user.email"
          :index="index"
          :key="user._id"
        ></div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { useMenuStore } from "../stores/MenuStore";
import UserService from "../services/AccountService";

export default {
  name: "userComponent",
  setup() {
    const menuStore = useMenuStore();
    return {
      menuStore,
    };
  },
  data() {
    return {
      users: [],
      id: "",
      name: "",
      email: "",
      error: "",
    };
  },
  methods: {
    async getUsers() {
      try {
        const response = await AccountService.getUsers();
        this.users = response.data;
      } catch (err) {
        this.err = err.response.data.message;
      }
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style scoped>
.dashboard {
  margin: 0px;
  padding: 0px;
  background-color: #ffad3b;
}
</style>
