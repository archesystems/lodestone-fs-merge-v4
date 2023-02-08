<template>
  <span class="top-menu">
    <HomeLinkIcon />
    <CloudLinkIcon />
    <AlertsLinkIcon />
    <HelpLinkIcon />
    <AccountLinkIcon />
  </span>
</template>

<script>
import HomeLinkIcon from "./HomeLinkIcon.vue";
import CloudLinkIcon from "./CloudLinkIcon.vue";
import AlertsLinkIcon from "./AlertsLinkIcon.vue";
import HelpLinkIcon from "./HelpLinkIcon.vue";
import AccountLinkIcon from "./AccountLinkIcon.vue";

export default {
  components: {
    HomeLinkIcon,
    AlertsLinkIcon,
    HelpLinkIcon,
    CloudLinkIcon,
    AccountLinkIcon,
  },
};
</script>

<style scoped>
@media (min-width: 759px) {
  .top-menu {
    display: none;
  }
}
</style>
