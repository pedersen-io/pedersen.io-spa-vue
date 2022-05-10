<template>
  <div>
    <div class="md-layout md-alignment-top-center">
      <Subdomain
        name="Jasper Pedersen"
        propMessage="I'm a baby"
        destination="https://jasper.pedersen.io"
        imagefile="jasper_nightlight.jpg"
        class="md-layout-item md-small-size-100 md-xsmall-size-100"
      />
      <Subdomain
        name="Marissa Pedersen"
        propMessage="www.postcardstoseattle.com"
        destination="https://postcardstoseattle.com"
        imagefile="marissa_and_jp.jpg"
        class="md-layout-item md-small-size-100 md-xsmall-size-100"
      />
    </div>
  </div>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import { MdLayout } from "vue-material/dist/components";
import Subdomain from "@/components/Subdomain.vue";

Vue.use(MdLayout);

export default {
  name: "family",
  components: {
    Subdomain,
  },
};
</script>
