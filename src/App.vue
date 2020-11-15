<template>
  <div id="app">
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/" md-icon="home"></md-tab>
      <md-tab
        id="tab-about"
        md-label="About"
        md-icon="info"
        to="/about"
        exact
      ></md-tab>
      <md-tab
        id="tab-family"
        md-label="Family"
        md-icon="people"
        to="/family"
        exact
      ></md-tab>
      <md-tab
        id="github"
        md-label="Github"
        md-icon="/assets/icons/github-box.svg"
        href="https://github.com/derekpedersen"
        target="_blank"
        exact
      ></md-tab>
      <md-tab
        id="jenkins"
        md-label="Jenkins"
        md-icon="/assets/icons/jenkins.svg"
        href="https://jenkins.pedersen.io"
        target="_blank"
        exact
      ></md-tab>
      <md-tab
        id="linkedin"
        md-label="Linkedin"
        md-icon="/assets/icons/linkedin-box.svg"
        href="https://www.linkedin.com/in/derek-pedersen-67105415/"
        target="_blank"
        exact
      ></md-tab>
      <md-tab
        id="resume"
        md-label="Resume"
        md-icon="/assets/icons/file-pdf-box.svg"
        href="https://derek.pedersen.io/api/resume/download"
        target="_blank"
        exact
      ></md-tab>
      <md-tab
        id="docker"
        md-label="Docker"
        md-icon="/assets/icons/docker.svg"
        href="https://hub.docker.com/u/derekpedersen"
        target="_blank"
        exact
      ></md-tab>
      <md-tab
        id="stackoverflow"
        md-label="Stackoverflow"
        md-icon="/assets/icons/stackoverflow.svg"
        href="https://stackoverflow.com/users/1304353/derek-pedersen"
        target="_blank"
        exact
      ></md-tab>
      <md-tab
        id="hackerrank"
        md-label="Hackerrank"
        md-icon="/assets/icons/hackerrank.svg"
        href="https://www.hackerrank.com/derekpedersen"
        target="_blank"
        exact
      ></md-tab>
      <md-tab
        id="codefights"
        md-label="Codefights"
        md-icon="/assets/icons/codefights.svg"
        href="https://app.codesignal.com/profile/drockem"
        exact
      ></md-tab>
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

@include md-register-theme(
  "default",
  (
    primary: md-get-palette-color(purple, A200),
    // The primary color of your application
      accent: md-get-palette-color(red, A200),
    // The accent or secondary color
      theme: dark,
    // This can be dark or light
      linkExactActiveClass: white
  )
);

@import "~vue-material/dist/theme/all"; // Apply the theme
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MdIcon, MdTabs } from "vue-material/dist/components";

Vue.use(MdTabs);
Vue.use(MdIcon);

const AppProps = Vue.extend({
  props: {
    propMessage: String
  }
});

@Component({
  components: {}
})
export default class App extends AppProps {}
</script>