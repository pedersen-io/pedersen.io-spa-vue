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
        <img
          :src="action.iconUrl"
          :alt="action.label + ' icon'"
          class="nav-icon"
        />
        <span>{{ action.label }}</span>
      </button>
    </nav>

    <details ref="mobileMenu" class="mobile-menu">
      <summary class="mobile-menu-trigger" aria-label="Open navigation menu">
        <span class="hamburger-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <span class="mobile-menu-label">Menu</span>
      </summary>
      <div class="mobile-menu-list">
        <button
          v-for="item in mobileItems"
          :key="item.label"
          type="button"
          class="nav-button"
          @click="handleMobileSelect(item)"
        >
          <img
            :src="item.iconUrl"
            :alt="item.label + ' icon'"
            class="nav-icon"
          />
          <span>{{ item.label }}</span>
        </button>
      </div>
    </details>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRouter } from "vue-router";
import { navigationItems, type NavigationItem } from "@/navigation";

type NavLink = { label: string; to: string; icon: string };

type ExternalAction = { label: string; url: string; icon: string };

export default defineComponent({
  name: "AppNavbar",
  setup() {
    const navLinks: NavLink[] = navigationItems
      .filter((item) => item.internal)
      .map((item) => ({ label: item.label, to: item.url, icon: item.icon }));

    const externalActions: ExternalAction[] = navigationItems
      .filter((item) => !item.internal)
      .map((item) => ({ label: item.label, url: item.url, icon: item.icon }));

    const router = useRouter();
    const mobileMenu = ref<HTMLDetailsElement | null>(null);

    const loadIcon = (name: string) => require(`@/assets/icons/${name}.svg`);

    const navLinksWithIcons = computed(() =>
      navLinks.map((link) => ({
        ...link,
        url: link.to,
        internal: true,
        iconUrl: loadIcon(link.icon),
      }))
    );
    const externalActionsWithIcons = computed(() =>
      externalActions.map((action) => ({
        ...action,
        url: action.url,
        internal: false,
        iconUrl: loadIcon(action.icon),
      }))
    );

    const mobileItems = computed(() => [
      ...navLinksWithIcons.value,
      ...externalActionsWithIcons.value,
    ]);

    const navigate = (path: string) => router.push(path);
    const newWindow = (url: string) => window.open(url, "_blank");
    const closeMobileMenu = () => {
      if (mobileMenu.value) {
        mobileMenu.value.open = false;
      }
    };

    const handleMobileSelect = (item: NavigationItem) => {
      closeMobileMenu();

      if (item.internal) {
        navigate(item.url);
      } else {
        newWindow(item.url);
      }
    };

    return {
      navLinks: navLinksWithIcons,
      externalActions: externalActionsWithIcons,
      mobileItems,
      mobileMenu,
      navigate,
      newWindow,
      handleMobileSelect,
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

  .topbar .mobile-menu-trigger {
    list-style: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    user-select: none;
  }

  .topbar .mobile-menu-label {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .topbar .hamburger-icon {
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
  }

  .topbar .hamburger-icon span {
    display: block;
    width: 22px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
  }

  .topbar .mobile-menu-list {
    display: grid;
    gap: 10px;
    margin-top: 10px;
  }
}
</style>
