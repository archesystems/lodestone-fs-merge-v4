<template>
  <v-container flex class="login">
    <v-card class="login-card" variant="outlined" mt-4>
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
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form ref="loginForm" v-model="formValidity">
          <v-text-field
            label="Email"
            name="email"
            prepend-icon="mdi-email"
            v-model="email"
            :rules="emailRules"
            required
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
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-space-around">
        <v-btn
          type="submit"
          class="login-button"
          :disabled="!formValidity"
          @click="login"
          >Login</v-btn
        >
        <v-btn class="register-button" to="/register">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from "vue";
import Api from "../services/Api";
import { useAccessStore } from "../stores/AccessStore";

export default {
  setup() {
    const loginForm = ref(null);
    const accessStore = useAccessStore();
    const email = ref("");
    const password = ref("");
    const showPassword = false;
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
    const formValidity = false;
    // accessStore: useAccessStore(),

    const login = async () => {
      if (this.$refs.loginForm.validate()) {
        await Api.post("/login", {
          email: email.value,
          password: password.value,
        })
          .then((response) => {
            accessStore.login = true;
            this.$router.push({ name: "account" });
            console.log(response);
          })
          .catch((err) => {
            console.log(err.response);
          });
      } else {
        console.log("Form is invalid");
      }
    };

    return {
      loginForm,
      validate(loginForm) {
        loginForm.value.validate();
      },
      accessStore,
      email,
      password,
      showPassword,
      emailRules,
      passwordRules,
      formValidity,
      login,
    };
  },
};
</script>

<style scoped>
@import "../assets/css/variables.css";

.login {
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
}

.login-card {
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
