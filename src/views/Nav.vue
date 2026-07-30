<template>
  <div id="nav" class="nav-shell">
    <AppNavbar />
    <AppSidenav id="sidenav" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavbar from "@/components/Navbar.vue";
import AppSidenav from "@/components/Sidenav.vue";

export default defineComponent({
  name: "AppNav",
  components: {
    AppNavbar,
    AppSidenav,
  },
});
</script>

<style>
#nav {
  background-color: #002878;
}

@media screen and (min-width: 959px) {
  #sidenav {
    display: none;
  }
}
</style>
