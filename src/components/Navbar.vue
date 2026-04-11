<template>
  <header class="topbar">
    <div class="brand">pedersen.io</div>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/family">Family</router-link>
      <router-link to="/thoughts">Thoughts</router-link>
      <button type="button" @click="newWindow('https://celebrityskateboards.com')">Celebrity</button>
      <button type="button" @click="newWindow('https://derekpedersen.github.io/#projects')">Projects</button>
      <button type="button" @click="newWindow('https://github.com/derekpedersen')">Github</button>
      <button type="button" @click="newWindow('https://jenkins.pedersen.io')">Jenkins</button>
      <button type="button" @click="newWindow('https://www.linkedin.com/in/derek-pedersen-67105415/')">LinkedIn</button>
      <button type="button" @click="newWindow('https://derek.pedersen.io/api/resume/download')">Resume</button>
      <button type="button" @click="newWindow('https://hub.docker.com/u/derekpedersen')">Docker</button>
      <button type="button" @click="newWindow('https://stackoverflow.com/users/1304353/derek-pedersen')">StackOverflow</button>
      <button type="button" @click="newWindow('https://derekpedersen.atlassian.net/secure/RapidBoard.jspa?projectKey=DP&rapidView=7')">Jira</button>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNavbar",
  methods: {
    newWindow(url: string) {
      window.open(url, "_blank");
    },
  },
});
</script>

<style>
.brand {
  font-size: 1.1rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

@media (max-width: 960px) {
  .nav-links {
    display: none;
  }
}
</style>
