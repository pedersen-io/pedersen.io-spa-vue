<template>
  <md-card>
    <md-card-media-cover md-solid>
      <md-card-media md-ratio="1:1">
        <img :src="require(`@/assets/${imagefile}`)" />
      </md-card-media>
      <md-card-area>
        <md-card-header> </md-card-header>
        <md-card-actions>
          <div class="md-xsmall-hide">{{ propMessage }}</div>
          &nbsp;|&nbsp;
          <md-button :href="`${destination}`">{{ name }}</md-button>
        </md-card-actions>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<style>
.md-card {
  margin: 8px;
  vertical-align: top;
  color: #fff6dd;
}
</style>

<script lang="ts">
import Vue from "vue";
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
    name: String,
  },
});

@Component({
  components: {},
  computed: mapState(["count"]),
  methods: mapMutations(["increment"]),
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
