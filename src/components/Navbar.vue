<template>
  <header class="topbar">
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

    <details class="mobile-menu">
      <summary>Menu</summary>
      <div class="mobile-menu-list">
        <button
          v-for="item in mobileItems"
          :key="item.label"
          type="button"
          class="nav-button"
          @click="item.internal ? navigate(item.url) : newWindow(item.url)"
        >
          <img :src="item.iconUrl" :alt="item.label + ' icon'" class="nav-icon" />
          <span>{{ item.label }}</span>
        </button>
      </div>
    </details>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";

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

    const router = useRouter();

    const loadIcon = (name: string) => require(`@/assets/icons/${name}.svg`);

    const navLinksWithIcons = computed(() => navLinks.map((link) => ({ ...link, url: link.to, internal: true, iconUrl: loadIcon(link.icon) })));
    const externalActionsWithIcons = computed(() => externalActions.map((action) => ({ ...action, url: action.url, internal: false, iconUrl: loadIcon(action.icon) })));

    const mobileItems = computed(() => [...navLinksWithIcons.value, ...externalActionsWithIcons.value]);

    const navigate = (path: string) => router.push(path);
    const newWindow = (url: string) => window.open(url, "_blank");

    return {
      navLinks: navLinksWithIcons,
      externalActions: externalActionsWithIcons,
      mobileItems,
      navigate,
      newWindow,
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

.mobile-menu {
  display: none;
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
  .topbar .nav-links {
    display: none !important;
  }

  .topbar .mobile-menu {
    display: block !important;
    width: 100%;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    color: #fff;
  }

  .topbar .mobile-menu summary {
    list-style: none;
    cursor: pointer;
    padding: 12px 14px;
    font: inherit;
    color: #fff;
    user-select: none;
  }

  .topbar .mobile-menu-list {
    display: grid;
    gap: 10px;
    margin-top: 10px;
  }
}
</style>
