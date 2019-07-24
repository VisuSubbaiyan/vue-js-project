<template>
  <div id="vendors-list">
    <div
      class="no-vendors"
      v-if="vendors.length === 0"
    >
      No vendors found, please select differerent range
    </div>
    <div class="vendor-list-item" v-for="(vendor, index) in vendors" :key="index">
      <router-link :to="vendor | formatUrl" tag="div" class="vendor-address">
        <h3 class="vendor-name">{{ vendor.name }},</h3>
        <div>Founded on: {{ vendor.founding_year }}, Total Employees: {{ vendor.employee_count_code }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import queryString from "query-string";

export default {
  name: "VendorsList",
  props: {
    vendors: {
      type: Array
    }
  },
  filters: {
    formatUrl(vendor) {
      return `/details/?${queryString.stringify(vendor)}`;
    }
  }
};
</script>

<style lang="scss">
$light-grey: #e8e8e8;

#vendors-list {
  padding: 10px;
  width: 94%;
  margin: 210px 3% 0;
  background: #2c3e50;
  border-radius: 5px;

  .no-vendors {
    color: $light-grey;
  }

  .vendor-list-item {
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 5px;
    background: $light-grey;
    text-align: left;

    &:hover {
      cursor: pointer;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 150px 3% 0;
  }
}

.vendor-address {
  display: flex;
  flex-direction: column;
  font-style: normal;

  .vendor-name {
    font-weight: bold;
    margin: 0;
    padding: 5px 0;
  }
}
</style>
