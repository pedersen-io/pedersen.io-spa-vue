<template>
  <md-list class="md-triple-line">
    <md-divider class="md-inset"></md-divider>
    <Thought
      title="The Return of the Lazy Developer"
      subtitle="Stop doing so much"
      post="This was a prevalant topic in the mid-2010s when I would be out at lunch with colleagues but seems to have died out in popularity as of late. It doesn't stress not doing any work, but rather puts an emphasis on the type of work a good engineer should be engaging in."
      icon="hammer"
    />
    <Thought
      title="Clean Architecture"
      subtitle="No circular dependencies here"
      post="Dependencies are only allowed to be inherited in one direction, inward. Luckily Golang prevents ciruclar dependencies but I've ran into some absolutely untenable .NET implementations that define spaghetti code."
      icon="track_changes"
    />
    <Thought
      title="Code is Documentation"
      subtitle="Source files are for humans"
      post="Not as documenation, it is the documenation. That's right. I expect to be able to read your code and make sense of it without having to reference some UML diagrams or manual. This approach favors being explicit over being implicit."
      icon="track_changes"
    />
    <Thought
      title="SCM is for Source Code"
      subtitle="We don't commit build artifacts"
      post="It's the source code, running the build operations should produce the same output at any given time. Thus we don't need or want to commit any build artifacts."
      icon="track_changes"
    />
    <md-divider class="md-inset"></md-divider>
  </md-list>
</template>

<style>
.md-list {
  margin: 8px !important;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Thought from "@/components/Thought.vue";
import { MdDivider, MdList } from "vue-material/dist/components";

Vue.use(MdDivider);
Vue.use(MdList);

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
