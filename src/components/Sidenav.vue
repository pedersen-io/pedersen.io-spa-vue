<template>
  <aside class="sidebar">
    <select
      class="sidebar-select"
      v-model="selectedItem"
      @change="handleSelect"
    >
      <option value="" disabled selected>Navigate...</option>
      <option v-for="item in navItems" :key="item.label" :value="item.url">
        {{ item.label }}
      </option>
    </select>
    <nav class="sidebar-nav">
      <button
        v-for="item in navItems"
        :key="item.label"
        type="button"
        class="sidebar-button"
        @click="item.internal ? navigate(item.url) : newWindow(item.url)"
      >
        <img
          :src="item.iconUrl"
          :alt="item.label + ' icon'"
          class="sidebar-icon"
        />
        <span>{{ item.label }}</span>
      </button>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRouter } from "vue-router";
import { navigationItems } from "@/navigation";

type NavItem = { label: string; url: string; icon: string; internal: boolean };

export default defineComponent({
  name: "AppSidenav",
  setup() {
    const router = useRouter();

    const items: NavItem[] = navigationItems.map((item) => ({ ...item }));

    const selectedItem = ref("");

    const loadIcon = (name: string) => require(`@/assets/icons/${name}.svg`);

    const navigate = (path: string) => router.push(path);
    const newWindow = (url: string) => window.open(url, "_blank");

    const handleSelect = () => {
      const item = items.find((entry) => entry.url === selectedItem.value);
      if (!item) return;

      if (item.internal) {
        navigate(item.url);
      } else {
        newWindow(item.url);
      }

      selectedItem.value = "";
    };

    return {
      selectedItem,
      navItems: computed(() =>
        items.map((item) => ({ ...item, iconUrl: loadIcon(item.icon) }))
      ),
      navigate,
      newWindow,
      handleSelect,
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

.sidebar-select {
  display: none;
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font: inherit;
}

@media (max-width: 960px) {
  .sidebar-nav {
    display: none !important;
  }

  .sidebar-select {
    display: block !important;
  }
}
</style>
