<template>
  <md-card>
    <md-table>
      <md-table-row>
        <md-table-head>Tech</md-table-head>
        <md-table-head md-numeric>Experience (Years)</md-table-head>
        <md-table-head></md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Golang</md-table-cell>
        <md-table-cell md-numeric>3</md-table-cell>
        <md-table-cell
          >Simply the best. What you see is what you get.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Kubernetes</md-table-cell>
        <md-table-cell md-numeric>3</md-table-cell>
        <md-table-cell>As easy as Sunday mornings.</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Docker</md-table-cell>
        <md-table-cell md-numeric>4</md-table-cell>
        <md-table-cell>Is there any other container?</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Java</md-table-cell>
        <md-table-cell md-numeric>1</md-table-cell>
        <md-table-cell>1 billion devices and contracting.</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>Ruby on Rails</md-table-cell>
        <md-table-cell md-numeric>1</md-table-cell>
        <md-table-cell>I don't like Ruby on Rails.</md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>C#</md-table-cell>
        <md-table-cell md-numeric>5</md-table-cell>
        <md-table-cell
          >Spent a lot of time with .NET starting at 3.0 till
          4.6.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Visual Basic</md-table-cell>
        <md-table-cell md-numeric>2</md-table-cell>
        <md-table-cell
          >If you work in a .NET shop that existed before 2010, you will
          encounter Visual Basic.</md-table-cell
        >
      </md-table-row>
    </md-table>
  </md-card>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {
  MdCard,
  MdTable,
  MdTableToolbar,
  MdLayout,
  MdRipple,
  MdDivider,
  MdContent
} from "vue-material/dist/components";

Vue.use(MdCard);
Vue.use(MdTable);
Vue.use(MdLayout);
Vue.use(MdRipple);
Vue.use(MdDivider);
Vue.use(MdContent);
Vue.use(MdTableToolbar);

const TechSkillzProps = Vue.extend({
  props: {
    propMessage: String
  },
  methods: {}
});

@Component({
  components: {}
})
export default class TechSkillz extends TechSkillzProps {}
</script>
