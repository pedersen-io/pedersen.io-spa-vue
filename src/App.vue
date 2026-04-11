<template>
  <div id="app">
    <AppNav />
    <main class="main-view">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNav from "@/views/Nav.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNav,
  },
});
</script>

<style>
:root {
  color-scheme: dark;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #fff6dd;
  background: #89cff0;
}

html,
body,
#app {
  margin: 0;
  min-height: 100%;
}

body {
  background: #89cff0;
}

#app {
  min-height: 100vh;
}

.main-view {
  margin-left: 260px;
  padding: 16px;
  box-sizing: border-box;
}

@media (max-width: 960px) {
  .main-view {
    margin-left: 0;
  }
}

.card,
.panel,
.thought-item,
.table-card {
  background: rgba(0, 40, 120, 0.95);
  border-radius: 16px;
  padding: 20px;
  margin: 16px 0;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.layout {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.layout-item {
  flex: 1 1 320px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #002878;
  color: #fff;
  padding: 16px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 20;
}

.topbar nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.topbar a,
.sidebar a,
.sidebar button,
.topbar button {
  color: #fff;
  text-decoration: none;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  padding: 24px 18px;
  background: #002878;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transform: translateX(-100%);
  transition: transform 0.2s ease-in-out;
  z-index: 15;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar .sidebar-title {
  font-size: 1.2rem;
  margin-bottom: 12px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 14;
}

.table-card table {
  width: 100%;
  border-collapse: collapse;
  color: #fff;
}

.table-card th,
.table-card td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  padding: 12px 10px;
  text-align: left;
}

.table-card th {
  font-weight: 700;
}

.thought-list {
  display: grid;
  gap: 14px;
}

.thought-item {
  display: grid;
  gap: 12px;
}

.thought-item .thought-header {
  display: flex;
  gap: 12px;
  align-items: center;
}

.thought-icon,
.subdomain-card img {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 12px;
  background: #fff;
}

.card-header h1,
.card-header .subtitle {
  margin: 0;
}

.card-header {
  margin-bottom: 16px;
}

.card-content ul {
  padding-left: 20px;
}

.card-content li {
  margin-bottom: 10px;
}

.subdomain-card {
  display: grid;
  gap: 16px;
}

.subdomain-card img {
  width: 100%;
  border-radius: 16px;
}

.subdomain-card .subdomain-action {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
