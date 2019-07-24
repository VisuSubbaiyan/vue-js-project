<template>
  <div :id="id" class="checkboxes">
    <h3 class="filter-label">{{ name }}</h3>
    <ul class="checkbox-list">
      <li v-for="(checkboxItem, index) in checkboxes" :key="checkboxItem.name">
        <label>
          <input type="checkbox" v-model="checkboxItem.checked" :value="index"/>
          {{checkboxItem.name}}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Checkboxes',
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    checkboxes: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.checkboxes {
  text-align: left;
  margin: 10px 20px 0 0;

  h3.filter-label {
    margin: 5px 0;
  }

  ul.checkbox-list {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    li {
      margin-right: 10px;
    }
  }
}
</style>
