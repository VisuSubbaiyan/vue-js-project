<template>
  <div id="vendor-details">
    <div class="heading">
      <router-link class="navigate-back" to="/" tag="div">&lt; Back</router-link>
      <h2 class="title">Vendor Details</h2>
    </div>
    <address class="vendor-address">
      <h3 class="vendor-name">{{ query.name }}</h3>
      <span>{{ query.street }}</span>
      <span>{{ query.zipcode }} {{ query.city }}</span>
    </address>
  </div>
</template>

<script>
export default {
  name: "VendorDetails",
  props: {
    query: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
$light-grey: #e8e8e8;
$bg-dark: #2c3e50;

#vendor-details {
  width: 94%;
  height: 100vh;
  margin: 10px 3%;
  background: $light-grey;
  border-radius: 5px;
  border: 10px solid $bg-dark;

  .heading {
    background: $bg-dark;
    color: #fff;
    padding: 10px;

    .navigate-back {
      cursor: pointer;
      position: absolute;
      margin: 5px 0;
      font-weight: bold;
    }
    .title {
      margin: 0;
      padding: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    width: 500px;
    margin: 10px auto;
    height: 300px;
  }
}
</style>
