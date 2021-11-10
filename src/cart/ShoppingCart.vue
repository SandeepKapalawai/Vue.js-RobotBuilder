<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{robot.heads.title }}
          </td>
          <td class="cost">
               {{$filters.currency(robot.cost, '$')}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
 <div>
    <h2 class="saleItems">You Saved money on this robots</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{robot.heads.title}}
          </td>
          <td class="cost">
              {{$filters.currency(robot.cost, '$')}}
          </td>
        </tr>
      </tbody>
    </table>
 </div>
</template>

<script>
import currencyFilter from '../shared/currency-filter';

export default {
  name: 'Cart',
  methods: {
    currency: currencyFilter
  },
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      return this.$store.getters['robots/cartSaleItems'];
    }
  }
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }

  .saleItems{
      margin-top: 50px;
      font-size: 10px;
      color: red;
  }
</style>
