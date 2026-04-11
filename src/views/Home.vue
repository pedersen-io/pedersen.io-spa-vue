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

<style></style>
