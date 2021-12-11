<template>
  <div class="md-layout  md-medium-size-50 md-alignment-top-center">
    <Subdomain
      class="md-layout-item md-small-size-100 md-xsmall-size-100"
      imagefile="derek_and_jasper.jpg"
      name="Derek Pedersen"
      destination="https://derek.pedersen.io"
      propMessage="Senior Software Engineer by Day, Skateboarder by Weekend"
    />>
    <Tech />
  </div>
</template>

<style>
.md-card {
  margin: 8px;
  vertical-align: top;
  color: #fff6dd;
}
.md-card > .md-table {
  text-align: left;
  color: #fff6dd;
}
</style>

<script lang="ts">
import Subdomain from "@/components/Subdomain.vue";
import Tech from "@/components/Tech.vue";

export default {
  name: "home",
  components: {
    Subdomain,
    Tech
  }
};
</script>
