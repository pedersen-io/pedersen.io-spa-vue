<template>
  <div class="md-layout md-alignment-top-center">
    <md-card class="md-layout-item md-xlarge-size-48 md-large-size-48 md-medium-size-100 md-small-size-100 md-xsmall-size-100">
      <md-card-header>
        <div class="md-title">Derek Pedersen</div>
        <div class="md-subhead">Quick Facts</div>
      </md-card-header>
      <md-card-content>
        <ul>
          <li>Born at Evergreen Hospital (Kirkland, WA) in September 1985. 
          </li>
          <li>
          Grew up in Mill Creek, WA.
          </li>

          <li>
          Graduated from Jackson High School (Mill Creek, WA) in June 2004. 
          </li>
          <li>
          Spent a year at the University of Limerick (Limerick, Ireland) from September 2004 to June 2005.
          </li>
          <li>
          Graduated from Western Washington University (Bellingham, WA) in January 2010. Double majored in Economics and Philosophy.
          </li>
          <li>
          Graduated from Seattle Central Community College (Seattle, WA) in January 2012. Received a certificate in Database Design and Administration.
          </li>
          <li>
          Been programming since then.
          </li>
        </ul>
      </md-card-content>
    </md-card>
  </div>
</template>
<style>
.md-card {
  width: 45%;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  text-align: left;
}
.md-card > .md-table {
  text-align: left;
}
.md-divider {
  padding: 5px;
}
</style>
<script lang="ts">
import Vue from "vue";
import {
  MdCard,
  MdTable,
  MdTableToolbar,
  MdLayout,
  MdRipple,
  MdDivider
} from "vue-material/dist/components";

Vue.use(MdCard);
Vue.use(MdTable);
Vue.use(MdLayout);
Vue.use(MdRipple);
Vue.use(MdDivider);

export default {
  name: "about",
  components: {}
};
</script>
