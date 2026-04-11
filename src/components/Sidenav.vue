<template>
  <aside class="sidebar">
    <div class="sidebar-title">pedersen.io</div>
    <nav class="sidebar-nav">
      <button
        v-for="item in navItems"
        :key="item.label"
        type="button"
        class="sidebar-button"
        @click="item.internal ? navigate(item.url) : newWindow(item.url)"
      >
        <img :src="item.iconUrl" :alt="item.label + ' icon'" class="sidebar-icon" />
        <span>{{ item.label }}</span>
      </button>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

type NavItem = { label: string; url: string; icon: string; internal: boolean };

export default defineComponent({
  name: "AppSidenav",
  setup() {
    const router = useRouter();

    const items: NavItem[] = [
      { label: "Home", url: "/", icon: "track_changes", internal: true },
      { label: "Tech", url: "/tech", icon: "track_changes", internal: true },
      { label: "About", url: "/about", icon: "track_changes", internal: true },
      { label: "Family", url: "/family", icon: "track_changes", internal: true },
      { label: "Thoughts", url: "/thoughts", icon: "track_changes", internal: true },
      { label: "Celebrity Skateboards", url: "https://celebrityskateboards.com", icon: "skateboard", internal: false },
      { label: "Projects", url: "https://derekpedersen.github.io/#projects", icon: "codefights", internal: false },
      { label: "Github", url: "https://github.com/derekpedersen", icon: "github-box", internal: false },
      { label: "Jenkins", url: "https://jenkins.pedersen.io", icon: "jenkins", internal: false },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/derek-pedersen-67105415/", icon: "linkedin-box", internal: false },
      { label: "Resume", url: "https://derek.pedersen.io/api/resume/download", icon: "file-pdf-box", internal: false },
      { label: "Docker", url: "https://hub.docker.com/u/derekpedersen", icon: "docker", internal: false },
      { label: "StackOverflow", url: "https://stackoverflow.com/users/1304353/derek-pedersen", icon: "stackoverflow", internal: false },
      { label: "Jira", url: "https://derekpedersen.atlassian.net/secure/RapidBoard.jspa?projectKey=DP&rapidView=7", icon: "jira", internal: false },
    ];

    const loadIcon = (name: string) => require(`@/assets/icons/${name}.svg`);

    return {
      navItems: computed(() => items.map((item) => ({ ...item, iconUrl: loadIcon(item.icon) }))),
      navigate: (path: string) => router.push(path),
      newWindow: (url: string) => window.open(url, "_blank"),
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

.sidebar-button {
  width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  padding: 10px 14px;
  color: #fff;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
}

.sidebar-button:hover {
  background: rgba(255, 255, 255, 0.18);
}

.sidebar-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

@media (min-width: 959px) {
  .sidebar {
    display: none;
  }
}
</style>
