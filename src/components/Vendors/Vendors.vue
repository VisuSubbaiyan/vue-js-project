<template>
  <div id="vendors">
    <div class="search-container">
      <h2 class="search-heading">Search</h2>
      <div class="checkbox-continer">
        <Checkboxes id="ec-checkboxes" name="Number of employees:" :checkboxes="employeeCount" />
        <Checkboxes id="fy-checkboxes" name="Founded Year:" :checkboxes="foundingYear" />
      </div>
    </div>
    <VendorsList :vendors="filteredVendors" />
  </div>
</template>

<script>
import { inRange } from "lodash";

import data from "../../response.json";
import Checkboxes from "../Checkboxes.vue";
import VendorsList from "./VendorsList.vue";

export default {
  name: 'Vendors',
  components: {
    Checkboxes,
    VendorsList
  },
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
      vendors: data // this data has to load dynamicaly from service in created life cycle hooks
    };
  },
  computed: {
    filteredVendors() {
      if (
        this.employeeCount.every(item => !item.checked) &&
        this.foundingYear.every(item => !item.checked)
      ) {
        return this.vendors;
      }

      return this.vendors.filter(
        vendor =>
          this.employeeCount.some(range => {
            return (
              range.checked &&
              (range.end
                ? inRange(vendor.employee_count_code, range.start, range.end)
                : vendor.employee_count_code >= range.start)
            );
          }) ||
          this.foundingYear.some(range => {
            return (
              range.checked &&
              (range.end
                ? inRange(vendor.founding_year, range.start, range.end)
                : vendor.founding_year <= range.start)
            );
          })
      );
    }
  }
};
</script>

<style lang="scss" scoped>
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

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
}
</style>
