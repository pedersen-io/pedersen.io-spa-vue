<template>
  <div id="app">
    <md-tabs md-sync-route>
      <md-tab 
        id="home" 
        md-label="Home" 
        to="/" 
        md-icon="home"
        exact
      ></md-tab>
      <md-tab
        id="about"
        md-label="About"
        md-icon="info"
        to="/about"
        exact
      ></md-tab>
      <md-tab
        id="family"
        md-label="Family"
        md-icon="people"
        to="/family"
        exact
      ></md-tab>
      <md-tab
        id="github"
        md-label="Github"
        md-icon="/assets/icons/github-box.svg"
        @click="newWindow('https://github.com/derekpedersen')"
        exact
      ></md-tab>
      <md-tab
        id="jenkins"
        md-label="Jenkins"
        md-icon="/assets/icons/jenkins.svg"
        @click="newWindow('https://jenkins.pedersen.io')"
        exact
      ></md-tab>
      <md-tab
        id="linkedin"
        md-label="Linkedin"
        md-icon="/assets/icons/linkedin-box.svg"
        @click="newWindow('https://www.linkedin.com/in/derek-pedersen-67105415/')"
        exact
      ></md-tab>
      <md-tab
        id="resume"
        md-label="Resume"
        md-icon="/assets/icons/file-pdf-box.svg"
        @click="newWindow('https://derek.pedersen.io/api/resume/download')"
        exact
      ></md-tab>
      <md-tab
        id="docker"
        md-label="Docker"
        md-icon="/assets/icons/docker.svg"
        @click="newWindow('https://hub.docker.com/u/derekpedersen')"
        exact
      ></md-tab>
      <md-tab
        id="stackoverflow"
        md-label="Stackoverflow"
        md-icon="/assets/icons/stackoverflow.svg"
        @click="newWindow('https://stackoverflow.com/users/1304353/derek-pedersen')"
        exact
      ></md-tab>
      <md-tab
        id="hackerrank"
        md-label="Hackerrank"
        md-icon="/assets/icons/hackerrank.svg"
        @click="newWindow('https://www.hackerrank.com/derekpedersen')"
        exact
      ></md-tab>
      <md-tab
        id="codefights"
        md-label="Codefights"
        md-icon="/assets/icons/codefights.svg"
        @click="newWindow('https://app.codesignal.com/profile/drockem')"
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
  },
  methods: {
    // since md-tabs doesn't natively support opening a link a new window
    newWindow: function (url: string) {   
          window.open(url, "_blank");    
    }
  } 
});

@Component({
  components: {}
})
export default class App extends AppProps {}
</script>