<template>
  <div id="nav">
    <Navbar class="md-layout-item md-small-hide" />
    <Sidenav id="sidenav" class="md-layout-item" />
  </div>
</template>

<style>
#nav {
  background-color: #002878 !important;
}

.md-tabs-navigation {
  background-color: #002878 !important;
}

.md-menu-content {
  min-height: auto;
  max-height: 100%;
}

@media screen and (min-width: 959px) {
  #sidenav {
    display: none;
  } /* hide it on larger screens */
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import Sidenav from "@/components/Sidenav.vue";

const NavProps = Vue.extend({
  props: {
    propMessage: String,
  },
  methods: {},
  components: {
    Navbar,
    Sidenav,
  },
});

@Component({
  components: {},
})
export default class Nav extends NavProps {}
</script>
