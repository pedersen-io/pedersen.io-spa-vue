<template>
  <div class="md-layout md-alignment-top">
    <md-card class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
      <md-card-header>
        <div class="md-title">Software Developer by day, Skateboarder by weekend</div>
      </md-card-header>
      <md-card-content>
        <img src="../assets/derek_and_jasper.jpg" alt="Derek and Jasper Pedersen" />
      </md-card-content>
    </md-card>
    <md-card class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
      <md-table>
        <!-- <md-table-toolbar>
        <h1 class="md-title">Skillz</h1>
        </md-table-toolbar>-->
        <md-table-row>
          <md-table-head>Tech</md-table-head>
          <md-table-head md-numeric>Years</md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Golang</md-table-cell>
          <md-table-cell md-numeric>3</md-table-cell>
          <md-table-cell>By far my favorite language</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>C#</md-table-cell>
          <md-table-cell md-numeric>5</md-table-cell>
          <md-table-cell>A lot of time with .NET 3.0 -> 4.6</md-table-cell>
        </md-table-row>
        <md-table-row>
          <md-table-cell>Kubernetes</md-table-cell>
          <md-table-cell md-numeric>3</md-table-cell>
          <md-table-cell>As easy as Sunday mornings</md-table-cell>
        </md-table-row>
      </md-table>
    </md-card>
  </div>
</template>
<style>
.md-card {
  width: 45%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-card > .md-table {
  text-align: left;
}
</style>
<script lang="ts">
import Vue from "vue";
import {
  MdCard,
  MdTable,
  MdTableToolbar,
  MdLayout,
  MdRipple
} from "vue-material/dist/components";

Vue.use(MdCard);
Vue.use(MdTable);
Vue.use(MdLayout);
Vue.use(MdRipple);

export default {
  name: "home",
  components: {}
};
</script>
