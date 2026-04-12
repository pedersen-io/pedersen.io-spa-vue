<template>
  <div class="layout">
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
  justify-content: center;
  width: min(100%, 1120px);
  margin: 0 auto;
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
  .layout {
    flex-direction: column;
  }
}

.table-card {
  min-width: 0;
}

.table-card table {
  width: 100%;
  table-layout: fixed;
}

.table-card th,
.table-card td {
  word-break: break-word;
}

.subdomain-card img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
}
</style>
