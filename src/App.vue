<template>
  <div id="app">
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
      <md-tab id="tab-about" md-label="About" to="/about" exact></md-tab>
      <md-tab id="tab-family" md-label="Family" to="/family" exact></md-tab>
    </md-tabs>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("default", (
  primary: md-get-palette-color(purple, A200), // The primary color of your application
  accent: md-get-palette-color(red, A200), // The accent or secondary color
  theme: dark, // This can be dark or light

  linkExactActiveClass: white,
));

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MdTabs } from "vue-material/dist/components";

Vue.use(MdTabs);

const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
});

@Component({
  components: {
    
  }
})
export default class App extends AppProps {

}
</script>