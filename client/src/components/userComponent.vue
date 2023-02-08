<template>
  <div class="container"></div>
  <h1>Users</h1>
  <div class="user-container">
    <div
      class="user"
      v-for="(user, index) in UserService"
      :name="user.name"
      :email="user.email"
      :index="index"
      :key="user._id"
    ></div>
  </div>
</template>

<script>
import UserService from "../services/UserService";

export default {
  name: "userComponent",
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
        const response = await UserService.getUsers();
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
