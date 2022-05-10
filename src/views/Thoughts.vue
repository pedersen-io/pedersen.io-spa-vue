<template>
  <md-list class="md-triple-line">
    <md-divider class="md-inset"></md-divider>
    <Thought
      title="Return of the Lazy Developer"
      subtitle="Stop doing so much"
      post="This was a prevalant topic in the mid-2010s when I would be out at lunch with colleagues but seems to have died out in popularity as of late. It doesn't stress not doing any work, but rather puts an emphasis on the type of work a good engineer should be engaging in."
      icon="hammer"
    />
    <md-divider class="md-inset"></md-divider>
  </md-list>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Thought from "@/components/Thought.vue";

const ThoughtsProps = Vue.extend({
  props: {},
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
