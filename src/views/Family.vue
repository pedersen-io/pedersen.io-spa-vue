<template>
  <div class="layout">
    <AppSubdomain
      name="Marissa Pedersen"
      propMessage="www.postcardstoseattle.com"
      destination="https://postcardstoseattle.com"
      imagefile="https://imgur.com/IlLzbUZ"
      class="layout-item"
    />
    <AppSubdomain
      name="Jasper Pedersen"
      propMessage="I'm a baby"
      destination="https://jasper.pedersen.io"
      imagefile="https://imgur.com/utfsHnG"
      class="layout-item"
    />
    <AppSubdomain
      name="Kieran Pedersen"
      propMessage="www.postcardstoseattle.com"
      destination="https://postcardstoseattle.com"
      imagefile="https://imgur.com/NwsND12"
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
