<template>
  <div class="md-layout md-alignment-top-center">
    <md-card
      class="md-layout-item md-xlarge-size-48 md-large-size-48 md-medium-size-100 md-small-size-100 md-xsmall-size-100"
    >
      <md-card-header>
        <div class="md-title">Derek Pedersen</div>
        <div class="md-subhead">Quick Facts</div>
      </md-card-header>
      <md-card-content>
        <ul>
          <li>Born at Evergreen Hospital (Kirkland, WA) in September 1985.</li>
          <li>Grew up in Mill Creek, WA.</li>
          <li>Started skiing when I was 4 years old.</li>
          <li>
            Graduated from Jackson High School (Mill Creek, WA) in June 2004.
          </li>
          <li>
            Spent a year at the University of Limerick (Limerick, Ireland) from
            September 2004 to June 2005.
          </li>
          <li>
            Graduated from Western Washington University (Bellingham, WA) in
            January 2010. Double majored in Economics and Philosophy.
          </li>
          <li>
            Graduated from Seattle Central Community College (Seattle, WA) in
            January 2012. Received a certificate in Database Design and
            Administration.
          </li>
          <li>
            Worked at Touratech-USA from January 2010 - January 2012 as a Sales
            Associate.
          </li>
          <li>
            Worked at ATGStores.com as Software Team Lead from February 2012
            till October 2015 when we were transitioned to Full Time Lowe's
            employees.
          </li>
          <li>Continued on at Lowe's as an Architect until May 2016.</li>
          <li>
            Worked as Software Consultant at iTrellis from May 2016 till Dec
            2017 when my work for hire contract term expired as hired on as Full
            Time employee at MultiScale.
          </li>
          <li>
            Worked at MultiScale Health Networks as a Software Engineer from
            January 2018 till June 2019.
          </li>
          <li>
            Currently working at Navigating Cancer as a Senior Software Engineer
            since 2019.
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
import { MdCard, MdLayout, MdDivider } from "vue-material/dist/components";

Vue.use(MdCard);
Vue.use(MdLayout);
Vue.use(MdDivider);

export default {
  name: "about",
  components: {},
};
</script>
