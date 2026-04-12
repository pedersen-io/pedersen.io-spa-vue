<template>
  <div class="layout">
    <AppSubdomain
      name="Marissa Pedersen"
      propMessage="www.postcardstoseattle.com"
      destination="https://postcardstoseattle.com"
      imagefile="marissa_and_jp.jpg"
      class="layout-item"
    />
    <AppSubdomain
      name="Jasper Pedersen"
      propMessage="I'm a baby"
      destination="https://jasper.pedersen.io"
      imagefile="jasper_nightlight.jpg"
      class="layout-item"
    />
    <AppSubdomain
      name="Kieran Pedersen"
      propMessage="www.postcardstoseattle.com"
      destination="https://postcardstoseattle.com"
      imagefile="marissa_and_jp.jpg"
      class="layout-item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppSubdomain from "@/components/Subdomain.vue";

export default defineComponent({
  name: "FamilyView",
  components: {
    AppSubdomain,
  },
});
</script>

<style></style>
