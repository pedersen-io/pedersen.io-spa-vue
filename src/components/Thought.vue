<template>
    <md-list-item>
      <md-avatar>
        <img src="https://placeimg.com/40/40/people/1" alt="People" />
      </md-avatar>

      <div class="md-list-item-text">
        <span>Return of the Lazy Developer</span>
        <span>Stop doing so much</span>
        <p>
          This was a prevalant topic in the mid-2010s when I would be out at lunch with colleagues but seems to have died out in popularity as of late. It doesn't stress not doing any work, but rather puts an emphasis on the type of work a good engineer should be engaging in.
        </p>
      </div>

      <md-button class="md-icon-button md-list-action">
        <md-icon class="md-primary">star</md-icon>
      </md-button>
    </md-list-item>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";


const ThoughtProps = Vue.extend({
  props: {
    propMessage: String,
  },
  methods: {
    yearsExperience: function(startYear: number) {
      return new Date().getFullYear() - startYear;
    },
  },
});

@Component({
  name: "Thought",
  components: {},
})
export default class Thought extends ThoughtProps {}
</script>
