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
        <md-table-cell md-numeric
          >2016 - present ({{ yearsExperience(2016) }})</md-table-cell
        >
        <md-table-cell class="md-xsmall-hide"
          >Simply the best. What you see is what you get.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Kubernetes</md-table-cell>
        <md-table-cell md-numeric
          >2017 - present ({{ yearsExperience(2017) }})</md-table-cell
        >
        <md-table-cell class="md-xsmall-hide"
          >As easy as Sunday mornings.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Helm</md-table-cell>
        <md-table-cell md-numeric
          >2019 - present ({{ yearsExperience(2019) }})</md-table-cell
        >
        <md-table-cell class="md-xsmall-hide"
          >Better than Sunday brunch.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Docker</md-table-cell>
        <md-table-cell md-numeric
          >2015 - present ({{ yearsExperience(2015) }})</md-table-cell
        >
        <md-table-cell class="md-xsmall-hide"
          >The one that changed them all.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>C#</md-table-cell>
        <md-table-cell md-numeric>2012 - 2018 (6)</md-table-cell>
        <md-table-cell class="md-xsmall-hide"
          >Spent a lot of time with .NET starting at 3.0 till
          4.6.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Visual Basic</md-table-cell>
        <md-table-cell md-numeric>2012 - 2018 (6)</md-table-cell>
        <md-table-cell class="md-xsmall-hide"
          >If you work in a .NET shop that existed before 2010, you will
          encounter VB.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Angular</md-table-cell>
        <md-table-cell md-numeric
          >2014 - present ({{ yearsExperience(2014) }})</md-table-cell
        >
        <md-table-cell class="md-xsmall-hide"
          >Dealt with the 1.0, 1.5+, and 2.0+ changes and it's still probably my
          favorite frontend framework.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>React</md-table-cell>
        <md-table-cell md-numeric
          >2017 - present ({{ yearsExperience(2017) }})</md-table-cell
        >
        <md-table-cell class="md-xsmall-hide"
          >It has grown on me for sure.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Vue</md-table-cell>
        <md-table-cell md-numeric
          >2019 - present ({{ yearsExperience(2019) }})</md-table-cell
        >
        <md-table-cell class="md-xsmall-hide"
          >If only putting together a small frontend this is now my default
          choice.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Java</md-table-cell>
        <md-table-cell md-numeric
          >2019 - present ({{ yearsExperience(2019) }})</md-table-cell
        >
        <md-table-cell class="md-xsmall-hide"
          >1 billion devices and contracting.</md-table-cell
        >
      </md-table-row>
      <md-table-row>
        <md-table-cell>Ruby on Rails</md-table-cell>
        <md-table-cell md-numeric
          >2019 - present ({{ yearsExperience(2019) }})</md-table-cell
        >
        <md-table-cell class="md-xsmall-hide"
          >I do not like Ruby on Rails.</md-table-cell
        >
      </md-table-row>
    </md-table>
  </md-card>
</template>

<style></style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { MdTable } from "vue-material/dist/components";

Vue.use(MdTable);

const TechProps = Vue.extend({
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
  name: "Tech",
  components: {},
})
export default class Tech extends TechProps {}
</script>
