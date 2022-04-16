<template>
  <div id="app">
    <div class="md-xsmall-hide md-small-hide">
      <navbar />
    </div>
    <div class="md-medium-hide md-large-hide md-xlarge-hide">
      <menu />
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #89cff0;
  min-height: 100vh;
  color: #fff6dd;
}
</style>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: #ffc528,
    accent: #002878,
    theme: light,
    background: #002878,
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import Menu from "@/components/Menu.vue";

const AppProps = Vue.extend({
  props: {
    propMessage: String,
  },
  methods: {},
  components: {
    Navbar,
    Menu,
  },
});

@Component({
  components: {},
})
export default class App extends AppProps {}
</script>
