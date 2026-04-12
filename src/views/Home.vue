<template>
  <div class="home-layout">
    <div class="layout-item">
      <AppSubdomain
        imagefile="derek_and_jasper.jpg"
        name="Derek Pedersen"
        destination="https://derek.pedersen.io"
        propMessage="Senior Software Engineer by Day, Skateboarder by Weekend"
      />
    </div>
    <div class="layout-item">
      <Tech />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppSubdomain from "@/components/Subdomain.vue";
import Tech from "@/components/Tech.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppSubdomain,
    Tech,
  },
});
</script>

<style>
.layout {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
}

.layout-item {
  flex: 0 1 48%;
  min-width: 320px;
  max-width: 48%;
}

@media (max-width: 960px) {
  .layout-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .home-layout {
    flex-direction: column;
  }
}

.home-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
}

.table-card {
  min-width: 0;
}

.table-card table {
  width: 100%;
  table-layout: auto;
}

.table-card th,
.table-card td {
  word-break: normal;
}

.table-card thead th:nth-child(2),
.table-card tbody td:nth-child(2) {
  white-space: nowrap;
  width: 110px;
}

.subdomain-card img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
