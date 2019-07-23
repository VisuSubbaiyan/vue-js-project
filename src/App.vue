<template>
  <div id="app">
    <div class="search-container">
      <h2 class="search-heading">Search</h2>
      <div class="checkbox-continer">
        <Checkboxes id="ec-checkboxes" name="Number of employees:" :checkboxes="employeeCount" />
        <Checkboxes id="fy-checkboxes" name="Founded Year:" :checkboxes="foundingYear" />
      </div>
    </div>
    <EmployerList :employers="filteredEmployers" />
  </div>
</template>

<script>
import { inRange } from "lodash";

import data from "./response.json";
import Checkboxes from "./components/Checkboxes.vue";
import EmployerList from "./components/EmploersList.vue";

export default {
  name: "app",
  data() {
    return {
      employeeCount: [
        { name: "1-10", start: 1, end: 10, checked: false },
        { name: "10-100", start: 10, end: 100, checked: false },
        { name: "100-1000", start: 100, end: 1000, checked: false },
        { name: "1000+", start: 1000, checked: false }
      ],
      foundingYear: [
        { name: "2009-2019", start: 2009, end: 2019, checked: false },
        { name: "1999-2009", start: 1999, end: 2009, checked: false },
        { name: "Older", start: 1999, checked: false }
      ],
      employers: data
    };
  },
  components: {
    Checkboxes,
    EmployerList
  },
  computed: {
    filteredEmployers() {
      if (
        this.employeeCount.every(item => !item.checked) &&
        this.foundingYear.every(item => !item.checked)
      ) {
        return this.employers;
      }

      return this.employers.filter(
        employer =>
          this.employeeCount.some(range => {
            return (
              range.checked &&
              (range.end
                ? inRange(employer.employee_count_code, range.start, range.end)
                : employer.employee_count_code >= range.start)
            );
          }) ||
          this.foundingYear.some(range => {
            return (
              range.checked &&
              (range.end
                ? inRange(employer.founding_year, range.start, range.end)
                : employer.founding_year <= range.start)
            );
          })
      );
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.search-container {
  background: #2c3e50;
  color: #fff;
  padding: 10px 3%;
  width: 100%; 
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;

  h2.search-heading {
    margin: 0;
    text-align: left;
  }

  .checkbox-continer {
    display: flex;
    width: 100%;
    flex-direction: column;

    @media screen and (min-width:768px) {
      flex-direction: row;
    }
  }
}
</style>
