<template>
  <div class="page-container">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <md-button @click="toggleMenu">
        <span class="md-title">pedersen.io</span>
      </md-button>
    </md-toolbar>

    <md-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-primary" md-elevation="0">
        <div class="md-toolbar-section-end">
          <md-button @click="toggleMenu">
            <span class="md-title">pedersen.io</span>
          </md-button>
          <md-button class="md-icon-button md-dense" @click="toggleMenu">
            <md-icon>keyboard_arrow_left</md-icon>
          </md-button>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item
          id="home"
          md-label="Home"
          @click="$router.push({ path: '/' })"
          ><md-icon>home</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>

        <md-list-item
          id="tech"
          md-label="Tech"
          @click="$router.push({ path: '/tech' })"
          ><md-icon>laptop</md-icon>
          <span class="md-list-item-text">Tech</span>
        </md-list-item>

        <md-list-item
          id="about"
          md-label="About"
          @click="$router.push({ path: '/about' })"
          ><md-icon>info</md-icon>
          <span class="md-list-item-text">About</span>
        </md-list-item>

        <md-list-item
          id="family"
          md-label="Family"
          @click="$router.push({ path: '/family' })"
          ><md-icon>people</md-icon>
          <span class="md-list-item-text">Family</span>
        </md-list-item>

        <md-list-item
          id="thoughts"
          md-label="Thoughts"
          @click="$router.push({ path: '/thoughts' })"
          ><md-icon>self_improvement</md-icon>
          <span class="md-list-item-text">Thoughts</span>
        </md-list-item>

        <md-list-item
          id="celebrity-skateboards"
          md-label="Celebrity Skateboards"
          @click="newWindow('https://celebrityskateboards.com')"
          ><md-icon>skateboarding</md-icon>
          <span class="md-list-item-text">Celebrity Skateboards</span>
        </md-list-item>

        <md-list-item
          id="projects"
          md-label="Projects"
          @click="newWindow('https://derekpedersen.github.io/#projects')"
          ><md-icon md-src="/assets/icons/hammer.svg">hammer</md-icon>
          <span class="md-list-item-text">Projects</span>
        </md-list-item>

        <md-list-item
          id="github"
          md-label="Github"
          @click="newWindow('https://github.com/derekpedersen')"
          ><md-icon md-src="/assets/icons/github-box.svg">github</md-icon>
          <span class="md-list-item-text">Github</span>
        </md-list-item>

        <md-list-item
          id="jenkins"
          md-label="Jenkins"
          @click="newWindow('https://jenkins.pedersen.io')"
          ><md-icon md-src="/assets/icons/jenkins.svg">jenkins</md-icon>
          <span class="md-list-item-text">Jenkins</span>
        </md-list-item>

        <md-list-item
          id="linkedin"
          md-label="LinkedIn"
          @click="
            newWindow('https://www.linkedin.com/in/derek-pedersen-67105415/')
          "
          ><md-icon md-src="/assets/icons/linkedin-box.svg">linkedin</md-icon>
          <span class="md-list-item-text">LinkedIn</span>
        </md-list-item>

        <md-list-item
          id="resume"
          md-label="Resume"
          @click="newWindow('https://derek.pedersen.io/api/resume/download')"
          ><md-icon md-src="/assets/icons/file-pdf-box.svg">resume</md-icon>
          <span class="md-list-item-text">Resume</span>
        </md-list-item>

        <md-list-item
          id="docker"
          md-label="Docker"
          @click="newWindow('https://hub.docker.com/u/derekpedersen')"
          ><md-icon md-src="/assets/icons/docker.svg">docker</md-icon>
          <span class="md-list-item-text">Docker</span>
        </md-list-item>

        <md-list-item
          id="stackoverflow"
          md-label="StackOverflow"
          @click="
            newWindow('https://stackoverflow.com/users/1304353/derek-pedersen')
          "
          ><md-icon md-src="/assets/icons/stackoverflow.svg"
            >stackoverflow</md-icon
          >
          <span class="md-list-item-text">StackOverflow</span>
        </md-list-item>

        <md-list-item
          id="jira"
          md-label="Jira"
          @click="
            newWindow(
              'https://derekpedersen.atlassian.net/secure/RapidBoard.jspa?projectKey=DP&rapidView=7'
            )
          "
          ><md-icon md-src="/assets/icons/jira.svg">jira</md-icon>
          <span class="md-list-item-text">Jira</span>
        </md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
  MdButton,
  MdDrawer,
  MdIcon,
  MdList,
  MdToolbar,
} from "vue-material/dist/components";

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdIcon);
Vue.use(MdList);
Vue.use(MdToolbar);

const NavbarProps = Vue.extend({
  props: {
    propMessage: String,
  },
  data: () => ({
    menuVisible: false,
  }),
  methods: {
    // since md-tabs doesn't natively support opening a link in a new window/tab
    newWindow: function(url: string) {
      window.open(url, "_blank");
    },
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
});

@Component({
  components: {},
})
export default class Navbar extends NavbarProps {}
</script>
