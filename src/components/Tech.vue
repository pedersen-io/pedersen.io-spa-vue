<template>
  <section class="table-card layout-item">
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              class="sort-button"
              data-test="sort-tech"
              @click="toggleSort('tech')"
            >
              Tech
            </button>
          </th>
          <th>
            <button
              type="button"
              class="sort-button"
              data-test="sort-experience"
              @click="toggleSort('experience')"
            >
              Experience
            </button>
          </th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tech in sortedTech" :key="tech.name">
          <td>{{ tech.name }}</td>
          <td>{{ yearsExperience(tech.startYear, tech.endYear) }}</td>
          <td>{{ tech.notes }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

type TechEntry = {
  name: string;
  startYear: number;
  endYear?: number;
  notes: string;
};

export default defineComponent({
  name: "AppTech",
  setup() {
    const techList: TechEntry[] = [
      {
        name: "Golang",
        startYear: 2016,
        notes: "Simply the best. What you see is what you get.",
      },
      {
        name: "Kubernetes",
        startYear: 2016,
        notes: "As easy as Sunday mornings.",
      },
      {
        name: "Helm",
        startYear: 2019,
        notes: "Better than Sunday brunch.",
      },
      {
        name: "Docker",
        startYear: 2014,
        notes: "The one that changed them all.",
      },
      {
        name: "C#",
        startYear: 2012,
        endYear: 2018,
        notes: "Spent a lot of time with .NET starting at 3.0 till 4.6.",
      },
      {
        name: "Visual Basic",
        startYear: 2012,
        endYear: 2016,
        notes:
          "If you work in a .NET shop that existed before 2010, you will encounter VB.",
      },
      {
        name: "Angular",
        startYear: 2013,
        endYear: 2018,
        notes:
          "Dealt with the 1.0, 1.5+, and 2.0+ changes and it's still probably my favorite frontend framework.",
      },
      {
        name: "React",
        startYear: 2017,
        endYear: 2022,
        notes: "It has grown on me for sure.",
      },
      {
        name: "Vue",
        startYear: 2019,
        notes:
          "If only putting together a small frontend this is now my default choice.",
      },
      {
        name: "Java",
        startYear: 2019,
        endYear: 2022,
        notes: "1 billion devices and contracting.",
      },
      {
        name: "Ruby on Rails",
        startYear: 2019,
        endYear: 2022,
        notes: "I do not like Ruby on Rails.",
      },
    ];

    const sortColumn = ref<"tech" | "experience">("experience");
    const sortDirection = ref<"asc" | "desc">("desc");

    const yearsExperience = (startYear: number, endYear?: number) => {
      const currentYear = endYear ?? new Date().getFullYear();
      const totalYears = currentYear - startYear;
      return endYear
        ? `${totalYears} yrs • ${startYear}-${endYear}`
        : `${totalYears} yrs • ${startYear}-present`;
    };

    const getExperienceValue = (entry: TechEntry) => {
      const endYear = entry.endYear ?? new Date().getFullYear();
      return endYear - entry.startYear;
    };

    const sortedTech = computed(() => {
      return [...techList].sort((a, b) => {
        if (sortColumn.value === "tech") {
          const nameCompare = a.name.localeCompare(b.name);
          return sortDirection.value === "asc" ? nameCompare : -nameCompare;
        }

        const left = getExperienceValue(a);
        const right = getExperienceValue(b);
        return sortDirection.value === "asc" ? left - right : right - left;
      });
    });

    const toggleSort = (column: "tech" | "experience") => {
      if (sortColumn.value === column) {
        sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
      } else {
        sortColumn.value = column;
        sortDirection.value = "desc";
      }
    };

    return {
      sortedTech,
      yearsExperience,
      toggleSort,
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

.sort-button {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding: 0;
  text-align: left;
}
</style>
