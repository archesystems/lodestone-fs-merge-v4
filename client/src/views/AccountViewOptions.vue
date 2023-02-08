<template>
  <v-container flex class="account">
    <v-row>
      <v-col>
        <v-card class="account-card" variant="outlined" mt-4>
          <v-card-item>
            <img
              alt="Lodestone Logo"
              class="lodestone-logo"
              src="../assets/img/lodestone-logo-96x96.png"
            />
            <img
              class="lodestone-text"
              src="../assets/img/lodestone-text-24px.png"
              alt="Lodestone"
            />
          </v-card-item>
          <v-card-title>
            <h2>Account</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="logoutForm" v-model="formValidity">
              <v-text-field
                label="User Name (your public alias)"
                name="name"
                prepend-icon="mdi-account"
                v-model="username"
                :rules="userNameRules"
                required
                persistent-hint
                type="text"
              ></v-text-field>
              <v-text-field
                label="Email"
                name="username"
                prepend-icon="mdi-email"
                v-model="email"
                :rules="emailRules"
                required
                persistent-hint
                type="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                v-model="password"
                :rules="passwordRules"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
              ></v-text-field>
              <v-card-actions class="justify-space-around">
                <v-btn
                  class="logout-button"
                  :disabled="!formValidity"
                  @click="logout"
                  >Logout</v-btn
                >
                <v-btn class="edit-button" to="/register">Edit</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useAccessStore } from "../stores/AccessStore";
import Api from "../services/Api";

export default {
  name: "LoginView",
  // setup() {
  //   const menuStore = useMenuStore();
  //   return { menuStore };
  // },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      showPassword: false,
      userRules: [(value) => !!value || "User name is required"],
      emailRules: [
        (value) => !!value || "Email is required",
        (value) => value.indexOf("@") !== 0 || "Email must contain an address",
        (value) => value.includes("@") || "Email must contain '@' (at) sign",
        (value) =>
          value.indexOf(".") - value.indexOf("@") > 1 ||
          "Email must contain a domain",
        (value) =>
          value.indexOf(".") <= value.length - 3 ||
          "Email must contain a valid domain extension",
      ],
      passwordRules: [
        (value) => !!value || "Password is required",
        (value) =>
          value.indexOf(".") <= value.length - 8 ||
          "Password must have 7 or more characters",
      ],
      formValidity: false,
    };
  },

  methods: {
    async logout() {
      await Api.post("/logout", {
        username: this.username,
        email: this.email,
      })
        .then((response) => {
          const accessStore = useAccessStore();
          accessStore.login = false;
          this.$router.push({ name: "login" });
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped>
@import "../assets/css/variables.css";

.account {
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
}

.account-card {
  margin-left: auto;
  margin-right: auto;
  min-width: 320px;
  max-width: 360px;
}

.lodestone-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14px;
}

.lodestone-text {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  margin-bottom: 10px;
}

.logout-button {
  background-color: #3083ff;
  color: #ffffff;
  width: 120px;
}

.register-button {
  background-color: #3083ff;
  color: #ffffff;
  width: 120px;
}

.edit-button {
  background-color: #3083ff;
  color: #ffffff;
  width: 120px;
}
</style>
