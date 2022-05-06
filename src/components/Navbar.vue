<template>
  <div id="tabs">
    <md-tabs md-sync-route>
      <md-tab id="home" md-label="Home" md-icon="home" to="/" exact></md-tab>
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
        id="thoughts"
        md-label="Thoughts"
        md-icon="self_improvement"
        to="/thoughts"
        exact
      ></md-tab>
      <md-tab
        id="projects"
        md-label="Projects"
        md-icon="/assets/icons/hammer.svg"
        @click="newWindow('https://derekpedersen.github.io/#projects')"
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
        @click="
          newWindow('https://www.linkedin.com/in/derek-pedersen-67105415/')
        "
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
        @click="
          newWindow('https://stackoverflow.com/users/1304353/derek-pedersen')
        "
        exact
      ></md-tab>
      <!-- <md-tab
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
        ></md-tab> -->
      <md-tab
        id="jira"
        md-label="Jira"
        md-icon="/assets/icons/jira.svg"
        @click="
          newWindow(
            'https://derekpedersen.atlassian.net/secure/RapidBoard.jspa?projectKey=DP&rapidView=7'
          )
        "
        exact
      ></md-tab>
    </md-tabs>
  </div>
</template>

<style>
.md-tabs-navigation {
  background-color: #002878 !important;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MdIcon, MdTabs, MdMenu, MdList } from "vue-material/dist/components";

Vue.use(MdTabs);
Vue.use(MdIcon);
Vue.use(MdMenu);
Vue.use(MdList);

const NavbarProps = Vue.extend({
  props: {
    propMessage: String,
  },
  methods: {
    // since md-tabs doesn't natively support opening a link in a new window/tab
    newWindow: function(url: string) {
      window.open(url, "_blank");
    },
  },
});

@Component({
  components: {},
})
export default class Navbar extends NavbarProps {}
</script>
