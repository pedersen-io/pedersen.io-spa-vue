<template>
  <div>
    <div class="md-layout">
      <Subdomain propMessage="I'm Jasper!" destination="https://jasper.pedersen.io" image="/img/jasper_nightlight.jpg" />
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
