<template>
  <!-- <md-list class="md-triple-line">
    <Thought />
    <md-divider class="md-inset"></md-divider>
  </md-list> -->
    <div class="md-layout md-gutter md-alignment-center">
    <div class="md-layout-item md-alignment-center">
      <md-icon class="md-size-5x md-alignment-center">construction</md-icon>
    </div>
  </div>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Thought from "@/components/Navbar.vue";

const ThoughtsProps = Vue.extend({
  props: {
    propMessage: String,
  },
  methods: {},
  components: {
    Thought,
  },
});

@Component({
  components: {},
})
export default class Thoughts extends ThoughtsProps {}
</script>
