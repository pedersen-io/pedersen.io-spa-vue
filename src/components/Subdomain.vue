<template>
    <md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="1:1">
         <img :src="require(`@/assets/${imagefile}`)">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <!-- <span class="md-title">Solid background</span>
            <span class="md-subhead">1/1 image</span>-->
          </md-card-header>
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
  // Vuex's component binding helper can use here
  computed: mapState(["count"]),
  methods: mapMutations(["increment"])
})
export default class Subdomain extends SubdomainProps {
  // inital data
  msg: string = "new message";
  // use prop values for initial data
  helloMsg: string = "Hello, " + this.propMessage;
  // annotate refs type
  $refs!: {
    //helloComponent: HelloWorld;
  };
  // additional declaration is needed
  // when you declare some properties in `Component` decorator
  count!: number;
  increment!: () => void;
  // lifecycle hook
  mounted() {
    this.greet();
  }
  // computed
  get computedMsg() {
    return "computed " + this.msg;
  }
  // // method
  greet() {
    alert("greeting: " + this.msg);
    //this.$refs.helloComponent.sayHello();
  }
  // direct dispatch example
  incrementIfOdd() {
    this.$store.dispatch("incrementIfOdd");
  }
}
</script>
