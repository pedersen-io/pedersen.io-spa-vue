<template>
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="1:1">
        <img :src="require(`@/assets/${imagefile}`)" />
      </md-card-media>
      <md-card-area>
        <md-card-header> </md-card-header>
        <md-card-actions>
          {{ propMessage }} |
          <md-button :href="`${destination}`">{{ name }}</md-button>
        </md-card-actions>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Site } from "@/types"; // Our interface
import Component from "vue-class-component";
import { MdButton, MdCard } from "vue-material/dist/components";
import { mapState, mapMutations } from "vuex";

Vue.use(MdButton);
Vue.use(MdCard);

const SubdomainProps = Vue.extend({
  props: {
    propMessage: String,
    destination: String,
    imagefile: String,
    name: String
  }
});

@Component({
  components: {},
  computed: mapState(["count"]),
  methods: mapMutations(["increment"])
})
export default class Subdomain extends SubdomainProps {
  // inital data

  // annotate refs type
  $refs!: {
    subdomainComponent: Subdomain;
  };

  // lifecycle hook
  mounted() {}
}
</script>
