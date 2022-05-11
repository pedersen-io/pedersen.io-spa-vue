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

    <md-button class="md-icon-button md-list-action" @click="showDialog = true">
      <md-icon class="md-primary">menu_book</md-icon>
    </md-button>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>{{ title }}</md-dialog-title>
      <p class="dialog-content">
        {{ post }}
      </p>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false"
          >Close</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </md-list-item>
</template>

<style>
.dialog-content {
  margin: 15px;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
  MdAvatar,
  MdButton,
  MdDialog,
  MdIcon,
  MdList,
} from "vue-material/dist/components";

Vue.use(MdAvatar);
Vue.use(MdButton);
Vue.use(MdDialog);
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
  data: () => ({
    showDialog: false,
  }),
});

@Component({
  name: "Thought",
  components: {},
})
export default class Thought extends ThoughtProps {}
</script>
