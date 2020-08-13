<template>
  <div class="home d-flex">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-12 px-0">
          <Head/>
          <div class="main-content d-flex bg-info">
            <Sidebar/>
              <div class="row bg-success">
                <Card v-for="product in products" :key="product.id" :data="product"/>
              </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 px-0 bg-warning">
          <div class="cart">
            <Cart/>
            <!-- <Empty/> -->
            <CartItem/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../components/_base/head'
import Cart from '../components/_base/cart-head'
import Sidebar from '../components/_base/sidebar'
import Card from '../components/_base/card'
// import Empty from '../components/_base/empty-cart'
import CartItem from '../components/_base/cart-item'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Head,
    Cart,
    Sidebar,
    Card,
    // Empty,
    CartItem
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    getData () {
      axios.get('http://localhost:3000/api/v1/product/?page=1&limit=9')
        .then(res => {
          this.products = res.data.result
          // console.log(res)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
