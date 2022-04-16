<template>
  <md-menu md-direction="bottom-start">
    <md-button md-menu-trigger>Bottom Start</md-button>
    <md-menu-content>
      <md-menu-item
        id="home"
        md-label="Home"
        md-icon="home"
        to="/"
        exact
      ></md-menu-item>
      <md-menu-item
        id="about"
        md-label="About"
        md-icon="info"
        to="/about"
        exact
      ></md-menu-item>
      <md-menu-item
        id="family"
        md-label="Family"
        md-icon="people"
        to="/family"
        exact
      ></md-menu-item>
      <md-menu-item
        id="projects"
        md-label="Projects"
        md-icon="/assets/icons/hammer.svg"
        @click="newWindow('https://derekpedersen.github.io/#projects')"
        exact
      ></md-menu-item>
      <md-menu-item
        id="github"
        md-label="Github"
        md-icon="/assets/icons/github-box.svg"
        @click="newWindow('https://github.com/derekpedersen')"
        exact
      ></md-menu-item>
      <md-menu-item
        id="jenkins"
        md-label="Jenkins"
        md-icon="/assets/icons/jenkins.svg"
        @click="newWindow('https://jenkins.pedersen.io')"
        exact
      ></md-menu-item>
      <md-menu-item
        id="linkedin"
        md-label="Linkedin"
        md-icon="/assets/icons/linkedin-box.svg"
        @click="
          newWindow('https://www.linkedin.com/in/derek-pedersen-67105415/')
        "
        exact
      ></md-menu-item>
      <md-menu-item
        id="resume"
        md-label="Resume"
        md-icon="/assets/icons/file-pdf-box.svg"
        @click="newWindow('https://derek.pedersen.io/api/resume/download')"
        exact
      ></md-menu-item>
      <md-menu-item
        id="docker"
        md-label="Docker"
        md-icon="/assets/icons/docker.svg"
        @click="newWindow('https://hub.docker.com/u/derekpedersen')"
        exact
      ></md-menu-item>
      <md-menu-item
        id="stackoverflow"
        md-label="Stackoverflow"
        md-icon="/assets/icons/stackoverflow.svg"
        @click="
          newWindow('https://stackoverflow.com/users/1304353/derek-pedersen')
        "
        exact
      ></md-menu-item>
      <md-menu-item
        id="hackerrank"
        md-label="Hackerrank"
        md-icon="/assets/icons/hackerrank.svg"
        @click="newWindow('https://www.hackerrank.com/derekpedersen')"
        exact
      ></md-menu-item>
      <md-menu-item
        id="codefights"
        md-label="Codefights"
        md-icon="/assets/icons/codefights.svg"
        @click="newWindow('https://app.codesignal.com/profile/drockem')"
        exact
      ></md-menu-item>
      <md-menu-item
        id="jira"
        md-label="Jira"
        md-icon="/assets/icons/jira.svg"
        @click="
          newWindow(
            'https://derekpedersen.atlassian.net/secure/RapidBoard.jspa?projectKey=DP&rapidView=7'
          )
        "
        exact
      ></md-menu-item>
    </md-menu-content>
  </md-menu>
</template>

<style>
.md-menu-navigation {
  background-color: #002878 !important;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MdIcon, MdMenu } from "vue-material/dist/components";

Vue.use(MdMenu);
Vue.use(MdIcon);

const MenuProps = Vue.extend({
  props: {
    propMessage: String,
  },
  methods: {
    // since md-menu doesn't natively support opening a link in a new window/tab
    newWindow: function(url: string) {
      window.open(url, "_blank");
    },
  },
});

@Component({
  components: {},
})
export default class Menu extends MenuProps {}
</script>
