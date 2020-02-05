<template>
  <div class="subdomains">
    <Subdomain />
  </div>
</template>

<script>
// @ is an alias to /src
import Subdomain from "@/components/Subdomain.vue";

export default {
  name: "subdomains",
  components: {
    Subdomain
  }
};
</script>
