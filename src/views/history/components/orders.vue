<template>
    <div>
        <div class="recent-order">
                <div class="recent-head d-flex justify-content-between">
                    <h2 class="text-left mx-5">Recent Order</h2>
                    <div class="drop-down mx-3">
                        Today
                        <img src="assets/img/arrow-down-sign-to-navigate 1.png" alt="">
                    </div>
                </div>

                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Invoices</th>
                        <th scope="col">Cashier</th>
                        <th scope="col">Date</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#10928</td>
                        <td>Cashier 1</td>
                        <td>6 October 2019</td>
                        <td>Ice Tea, <br> Salad With peanut sauce</td>
                        <td>Rp. 120.000</td>
                      </tr>
                    </tbody>
                  </table>
           </div>
    </div>
</template>

<script>
export default {
  name: 'Orders'
}
</script>

<style scoped>

</style>
