<template>
  <header class="topbar">
    <div class="brand">pedersen.io</div>
    <nav class="nav-links">
      <router-link
        v-for="link in navLinks"
        :key="link.label"
        :to="link.to"
        class="nav-button"
      >
        <img :src="link.iconUrl" :alt="link.label + ' icon'" class="nav-icon" />
        <span>{{ link.label }}</span>
      </router-link>

      <button
        v-for="action in externalActions"
        :key="action.label"
        type="button"
        class="nav-button"
        @click="newWindow(action.url)"
      >
        <img :src="action.iconUrl" :alt="action.label + ' icon'" class="nav-icon" />
        <span>{{ action.label }}</span>
      </button>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

type NavLink = { label: string; to: string; icon: string };
type ExternalAction = { label: string; url: string; icon: string };

export default defineComponent({
  name: "AppNavbar",
  setup() {
    const navLinks: NavLink[] = [
      { label: "Home", to: "/", icon: "home" },
      { label: "About", to: "/about", icon: "about" },
      { label: "Family", to: "/family", icon: "family" },
      { label: "Thoughts", to: "/thoughts", icon: "thoughts" },
    ];

    const externalActions: ExternalAction[] = [
      { label: "Celebrity", url: "https://celebrityskateboards.com", icon: "skateboard" },
      { label: "Projects", url: "https://derekpedersen.github.io/#projects", icon: "codefights" },
      { label: "Github", url: "https://github.com/derekpedersen", icon: "github-box" },
      { label: "Jenkins", url: "https://jenkins.pedersen.io", icon: "jenkins" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/derek-pedersen-67105415/", icon: "linkedin-box" },
      { label: "Resume", url: "https://derek.pedersen.io/api/resume/download", icon: "file-pdf-box" },
      { label: "Docker", url: "https://hub.docker.com/u/derekpedersen", icon: "docker" },
      { label: "StackOverflow", url: "https://stackoverflow.com/users/1304353/derek-pedersen", icon: "stackoverflow" },
      { label: "Jira", url: "https://derekpedersen.atlassian.net/secure/RapidBoard.jspa?projectKey=DP&rapidView=7", icon: "jira" },
    ];

    const loadIcon = (name: string) => require(`@/assets/icons/${name}.svg`);

    return {
      navLinks: computed(() => navLinks.map((link) => ({ ...link, iconUrl: loadIcon(link.icon) }))),
      externalActions: computed(() => externalActions.map((action) => ({ ...action, iconUrl: loadIcon(action.icon) }))),
      newWindow: (url: string) => window.open(url, "_blank"),
    };
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

.nav-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.18);
}

.nav-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  object-fit: contain;
}

@media (max-width: 960px) {
  .nav-links {
    display: none;
  }
}
</style>
