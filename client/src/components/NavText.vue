<template>
  <span class="top-menu">
    <HomeLinkText />
    <CloudLinkText />
    <AlertsLinkText />
    <HelpLinkText />
    <AccountLinkText />
  </span>
</template>

<script>
import HomeLinkText from "./HomeLinkText.vue";
import CloudLinkText from "./CloudLinkText.vue";
import AlertsLinkText from "./AlertsLinkText.vue";
import HelpLinkText from "./HelpLinkText.vue";
import AccountLinkText from "./AccountLinkText.vue";

export default {
  components: {
    HomeLinkText,
    AlertsLinkText,
    CloudLinkText,
    HelpLinkText,
    AccountLinkText,
  },
};
</script>

<style scoped>
@media (max-width: 758px) {
  .top-menu {
    display: none;
  }
}
</style>
