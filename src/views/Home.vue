<template>
  <div class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-100 md-xsmall-size-100">
      <Subdomain
        imagefile="derek_and_jasper.jpg"
        name="Derek Pedersen"
        destination="https://derek.pedersen.io"
        propMessage="Senior Software Engineer by Day, Skateboarder by Weekend"
      />
    </div>
    <div class="md-layout-item md-large-size-50 md-medium-size-50 md-small-size-100 md-xsmall-size-100">
      <Tech />
    </div>
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
