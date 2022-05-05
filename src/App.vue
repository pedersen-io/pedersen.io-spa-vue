<template>
  <div id="app">
    <div>
      <navbar />
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

const AppProps = Vue.extend({
  props: {
    propMessage: String,
  },
  methods: {},
  components: {
    Navbar,
  },
});

@Component({
  components: {},
})
export default class App extends AppProps {}
</script>
