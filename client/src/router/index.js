import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CloudView from "../views/CloudView.vue";
import AlertsView from "../views/AlertsView.vue";
import HelpView from "../views/HelpView.vue";
import LoginView from "../views/LoginView.vue";
import AccountView from "../views/AccountView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import ProfileView from "../views/ProfileView.vue";
import PeopleView from "../views/PeopleView.vue";
import PlacesView from "../views/PlacesView.vue";
import IconsView from "../views/IconsView.vue";
import AboutView from "../views/AboutView.vue";
import SettingsView from "../views/SettingsView.vue";
import DbLoginView from "../views/DbLoginView.vue";
import DbRegisterView from "../views/DbRegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/cloud", name: "cloud", component: CloudView },
    { path: "/alerts", name: "alerts", component: AlertsView },
    { path: "/help", name: "help", component: HelpView },
    { path: "/login", name: "login", component: LoginView },
    { path: "/account", name: "account", component: AccountView },
    { path: "/register", name: "register", component: RegisterView },
    { path: "/dashboard", name: "dashboard", component: DashboardView },
    { path: "/profile", name: "profile", component: ProfileView },
    { path: "/people", name: "people", component: PeopleView },
    { path: "/places", name: "places", component: PlacesView },
    { path: "/icons", name: "icons", component: IconsView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/settings", name: "settings", component: SettingsView },
    { path: "/dblogin", name: "dblogin", component: DbLoginView },
    { path: "/dbregister", name: "dbregister", component: DbRegisterView },
  ],
});

export default router;
