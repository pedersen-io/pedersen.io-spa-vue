<template>
  <aside class="sidebar">
    <div class="sidebar-title">pedersen.io</div>
    <nav class="sidebar-nav">
      <button type="button" @click="navigate('/')">Home</button>
      <button type="button" @click="navigate('/tech')">Tech</button>
      <button type="button" @click="navigate('/about')">About</button>
      <button type="button" @click="navigate('/family')">Family</button>
      <button type="button" @click="navigate('/thoughts')">Thoughts</button>
      <button type="button" @click="newWindow('https://celebrityskateboards.com')">Celebrity Skateboards</button>
      <button type="button" @click="newWindow('https://derekpedersen.github.io/#projects')">Projects</button>
      <button type="button" @click="newWindow('https://github.com/derekpedersen')">Github</button>
      <button type="button" @click="newWindow('https://jenkins.pedersen.io')">Jenkins</button>
      <button type="button" @click="newWindow('https://www.linkedin.com/in/derek-pedersen-67105415/')">LinkedIn</button>
      <button type="button" @click="newWindow('https://derek.pedersen.io/api/resume/download')">Resume</button>
      <button type="button" @click="newWindow('https://hub.docker.com/u/derekpedersen')">Docker</button>
      <button type="button" @click="newWindow('https://stackoverflow.com/users/1304353/derek-pedersen')">StackOverflow</button>
      <button type="button" @click="newWindow('https://derekpedersen.atlassian.net/secure/RapidBoard.jspa?projectKey=DP&rapidView=7')">Jira</button>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AppSidenav",
  setup() {
    const router = useRouter();

    const navigate = (path: string) => {
      router.push(path);
    };

    const newWindow = (url: string) => {
      window.open(url, "_blank");
    };

    return {
      navigate,
      newWindow,
    };
  },
});
</script>

<style>
.sidebar {
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sidebar-nav {
  display: grid;
  gap: 10px;
}

.sidebar button {
  width: 100%;
  text-align: left;
  padding: 10px 14px;
}

@media (min-width: 959px) {
  .sidebar {
    display: none;
  }
}
</style>
