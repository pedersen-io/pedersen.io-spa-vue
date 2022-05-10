<template>
  <md-list-item>
    <md-avatar>
      <md-icon :md-src="require(`@/assets/icons/${icon}.svg`)">{{
        icon
      }}</md-icon>
    </md-avatar>

    <div class="md-list-item-text">
      <span>{{ title }}</span>
      <span>{{ subtitle }}</span>
      <p>
        {{ post }}
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
import {
  MdAvatar,
  MdButton,
  MdIcon,
  MdList,
} from "vue-material/dist/components";

Vue.use(MdAvatar);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdList);

const ThoughtProps = Vue.extend({
  props: {
    title: String,
    subtitle: String,
    post: String,
    icon: String,
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
