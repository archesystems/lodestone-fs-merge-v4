<template>
  <v-container flex class="register">
    <v-row>
      <v-col>
        <v-card class="register-card" variant="outlined" mt-4>
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
            <h2>Register</h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="registerForm" v-model="formValidity">
              <v-text-field
                label="User Name (your public alias)"
                name="alias"
                prepend-icon="mdi-account"
                v-model="usernameVM"
                :rules="userRules"
                required
                persistent-hint
                type="text"
              ></v-text-field>
              <v-text-field
                label="Email"
                name="username"
                prepend-icon="mdi-email"
                v-model="emailVM"
                :rules="emailRules"
                required
                persistent-hint
                type="email"
              ></v-text-field>
              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                v-model="passwordVM"
                :rules="passwordRules"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                :type="showPassword ? 'text' : 'password'"
              ></v-text-field>
              <v-card-actions class="justify-space-around">
                <v-btn class="login-button" to="/login">Login</v-btn>
                <v-btn
                  class="register-button"
                  :disabled="!formValidity"
                  @click="register"
                  >Register</v-btn
                ></v-card-actions
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
import Api from "../services/Api";
import { useAccessStore } from "../stores/AccessStore";

export default {
  setup() {
    const usernameVM = ref("");
    const emailVM = ref("");
    const passwordVM = ref("");
    const showPassword = ref(false);
    const formValidity = ref(false);
    const userRules = [(value) => !!value || "User name is required"];
    const emailRules = [
      (value) => !!value || "Email is required",
      (value) => value.indexOf("@") !== 0 || "Email must contain an address",
      (value) => value.includes("@") || "Email must contain '@' (at) sign",
      (value) =>
        value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email must contain a domain",
      (value) =>
        value.indexOf(".") <= value.length - 3 ||
        "Email must contain a valid domain extension",
    ];
    const passwordRules = [
      (value) => !!value || "Password is required",
      (value) =>
        value.indexOf(".") <= value.length - 8 ||
        "Password must have 7 or more characters",
    ];
    const accessStore = useAccessStore();

    return {
      usernameVM,
      emailVM,
      passwordVM,
      showPassword,
      formValidity,
      userRules,
      emailRules,
      passwordRules,
      accessStore,
    };
  },

  methods: {
    async register() {
      await Api.post("/register", {
        username: this.usernameVM,
        email: this.emailVM,
        password: this.passwordVM,
      })
        .then((response) => {
          this.accessStore.login = false;
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

.register {
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
}

.register-card {
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

.login-button {
  background-color: #3083ff;
  color: #ffffff;
  width: 120px;
}

.register-button {
  background-color: #3083ff;
  color: #ffffff;
  width: 120px;
}
</style>
