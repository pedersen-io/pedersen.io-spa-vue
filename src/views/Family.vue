<template>
  <div>
    <div class="md-layout md-alignment-top-center">
      <Subdomain propMessage="Jasper Pedersen" destination="https://jasper.pedersen.io" imagefile="jasper_nightlight.jpg" />
      <Subdomain propMessage="Marissa Pedersen" destination="https://postcardstoseattle.com" imagefile="marissa_and_jp.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MdLayout } from "vue-material/dist/components";
import Subdomain from "@/components/Subdomain.vue";

Vue.use(MdLayout);

export default {
  name: "family",
  components: {
    Subdomain
  }
};
</script>
