<template>
  <md-content>
    <h1>{{ msg }}</h1>
    <md-button class="md-raised md-primary" href="https://google.com">{{ propMessage }}</md-button>
  </md-content>
</template>

<script lang="ts">
import Vue from "vue";
import { Site } from "@/types"; // Our interface
import Component from "vue-class-component";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import { mapState, mapMutations } from "vuex";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);

const SubdomainProps = Vue.extend({
  props: {
    propMessage: String
  }
});

@Component({
  components: {
    
  },
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
    //this.greet();
  }
  // computed
  get computedMsg() {
    return "computed " + this.msg;
  }
  // method
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
