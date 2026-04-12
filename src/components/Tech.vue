<template>
  <section class="table-card layout-item">
    <table>
      <thead>
        <tr>
          <th>Tech</th>
          <th>Experience (Years)</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Golang</td>
          <td>{{ yearsExperience(2016) }}</td>
          <td>Simply the best. What you see is what you get.</td>
        </tr>
        <tr>
          <td>Kubernetes</td>
          <td>{{ yearsExperience(2017) }}</td>
          <td>As easy as Sunday mornings.</td>
        </tr>
        <tr>
          <td>Helm</td>
          <td>{{ yearsExperience(2019) }}</td>
          <td>Better than Sunday brunch.</td>
        </tr>
        <tr>
          <td>Docker</td>
          <td>{{ yearsExperience(2015) }}</td>
          <td>The one that changed them all.</td>
        </tr>
        <tr>
          <td>C#</td>
          <td>6</td>
          <td>Spent a lot of time with .NET starting at 3.0 till 4.6.</td>
        </tr>
        <tr>
          <td>Visual Basic</td>
          <td>6</td>
          <td>If you work in a .NET shop that existed before 2010, you will encounter VB.</td>
        </tr>
        <tr>
          <td>Angular</td>
          <td>{{ yearsExperience(2014) }}</td>
          <td>Dealt with the 1.0, 1.5+, and 2.0+ changes and it's still probably my favorite frontend framework.</td>
        </tr>
        <tr>
          <td>React</td>
          <td>{{ yearsExperience(2017) }}</td>
          <td>It has grown on me for sure.</td>
        </tr>
        <tr>
          <td>Vue</td>
          <td>{{ yearsExperience(2019) }}</td>
          <td>If only putting together a small frontend this is now my default choice.</td>
        </tr>
        <tr>
          <td>Java</td>
          <td>{{ yearsExperience(2019) }}</td>
          <td>1 billion devices and contracting.</td>
        </tr>
        <tr>
          <td>Ruby on Rails</td>
          <td>{{ yearsExperience(2019) }}</td>
          <td>I do not like Ruby on Rails.</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppTech",
  setup() {
    const yearsExperience = (startYear: number) => new Date().getFullYear() - startYear;
    return {
      yearsExperience,
    };
  },
});
</script>

<style>
.table-card {
  background: rgba(0, 40, 120, 0.95);
  border-radius: 16px;
  padding: 20px;
  margin: 16px 0;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.table-card table {
  width: 100%;
  border-collapse: collapse;
  color: #fff;
}

.table-card th,
.table-card td {
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  padding: 12px 10px;
  text-align: left;
}

.table-card th {
  font-weight: 700;
}
</style>
