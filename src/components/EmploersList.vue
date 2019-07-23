<template>
  <div id="employer-list">
    <div class="employer-list-item" v-for="(employer, index) in employers" :key="index">
      <address class="employer-address">
        <span class="employer-name">{{ employer.name }},</span>
        <span>{{ employer.street }},</span>
        <span>{{ employer.city }} {{ employer.zipcode }}</span>
      </address>
      <div>Since {{ employer.founding_year }}, Total Employees: {{ employer.employee_count_code }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployerList",
  props: {
    employers: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
#employer-list {
  padding: 10px;
  width: 94%;
  margin: 210px 3% 0;
  background: grey;
  border-radius: 5px;

  .employer-list-item {
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 5px;
    background: #e8e8e8;
    text-align: left;

    &:hover {
      cursor: pointer;
    }
    
    &:last-child {
      margin-bottom: 0;
    }

    .employer-address {
      display: flex;
      flex-direction: column;

      .employer-name {
        font-weight: bold;
      }
    }
  }

  @media screen and (min-width: 768px) {
    margin: 150px 3% 0; 
  }
}
</style>
