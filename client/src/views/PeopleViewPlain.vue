<template>
  <v-container class="people">
    <v-card width="360" class="ma-auto">
      <img
        alt="Lodestone Logo"
        class="logo"
        src="../assets/img/android-chrome-192x192.png"
        width="125"
        height="125"
      />
      <div>
        <h1>PeopleView</h1>
      </div>
      <button @click="getUsers">getUsers</button>
    </v-card>
  </v-container>
</template>

<script>
import Api from "../services/Api";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      Api.get("/")
        .then((response) => {
          this.users = response.data;
          console.log("GET");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.people {
  margin: 0px;
  padding: 0px;
  background-color: #ffad3b;
}
</style>
