<template>
  <div class="home d-flex">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-12 px-0">
          <Head/>
          <!-- <input v-model="search" type="text"> -->
          <div class="main-content d-flex">
            <Sidebar/>
            <div class="menu-content mx-3">
              <div class="row">
                <Card v-for="product in filtered" :key="product.id" :data="product"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 px-0 cart-container">
          <div class="cart">
            <Cart/>
            <!-- <Empty/> -->
            <CartItem/>
            <Button/>
            <CancelButton/>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Add Item -->
      <div class="modal fade" id="addItem" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Add Item</h5>
            </div>
            <div class="modal-body">
               <form>
                <div class="modalContent d-flex py-2">
                    <label class="col-sm-2 col-form-label h6">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control shadow" v-model="form.name">
                    </div>
                </div>
                <div class="modalContent d-flex py-2">
                    <label class="col-sm-2 col-form-label h6">Image</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control shadow" v-model="form.image">
                    </div>
                </div>
                <div class="modalContent d-flex py-2">
                    <label class="col-sm-2 col-form-label h6">Price</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control shadow" v-model="form.price">
                    </div>
                </div>
                <div class="modalContent d-flex py-2">
                    <label class="col-sm-2 col-form-label h6">Category</label>
                    <div class="col-sm-10">
                        <div class="dropdown d-flex">
                            <div class="form-group btn shadow">
                              <select name="category" style="border:transparent;" v-model="form.idCategory">
                                <option value="1">Drink</option>
                                <option value="2">Food</option>
                              </select>
                            </div>
                        </div>
                    </div>
                </div>
               </form>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary btn-block" data-dismiss="modal" @click="insertData()" v-show="!addData">Add</button>
              <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">Cancel</button>
            </div>
        </div>
        </div>
    </div>
    <!-- Modal Checkout -->

        <!-- Modal -->
        <div class="modal fade" id="modalCheckout">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="modal-head d-flex justify-content-between">
                        <h5 class="modal-title">Checkout</h5>
                        <span class="h6">Receipt no: #010410919</span>
                    </div>
                    <small class="h6 mb-5">Cashier: Pevita Pearce</small>
                        <div class="print-list mt-5">
                            <div class="item-checkout">
                                <span>Coffe Latte 1x</span>
                                <span>Rp. 15.000</span>
                            </div>
                            <div class="item-checkout">
                                <span>Black Forest 1x</span>
                                <span>Rp. 30.000</span>
                            </div>
                            <div class="item-checkout">
                                <span>Salmon Truffle Teriyaki 1x</span>
                                <span>Rp. 60.000</span>
                            </div>
                            <div class="item-checkout">
                                <span>PPN 10%</span>
                                <span>Rp. 10.500</span>
                            </div>
                            <div class="float-right font-weight-bold font-15">
                                Total: Rp. 115.500
                            </div>
                            <div class="clearfix"></div>
                            <p class="font-weight-bold font-15">
                                Payment: Cash
                            </p>
                        </div>
                </div>
                <div class="modal-footer">
                    <div class="footer-btn align-items-center">
                        <button type="button" class="btn print">Print</button>
                        <p class="h6">Or</p>
                        <button type="button" class="btn send">Send Email</button>
                    </div>
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
import Button from '../components/_base/button'
import CancelButton from '../components/_base/cancel-btn'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Head,
    Cart,
    Sidebar,
    Card,
    // Empty,
    CartItem,
    Button,
    CancelButton
  },
  data () {
    return {
      products: [],
      search: '',
      // Insert
      form: {
        name: '',
        image: '',
        price: '',
        idStatus: '1',
        idCategory: ''
      },
      addData: false
    }
  },
  methods: {
    getData () {
      axios.get('http://localhost:3000/api/v1/product/?page=1&limit=9')
        .then(res => {
          this.products = res.data.result
        })
    },
    insertData () {
      axios.post('http://localhost:3000/api/v1/product/', this.form)
        .then(res => {
          this.getData()
          this.form = ''
        })
    }
  },
  computed: {
    filtered: function () {
      return this.products.filter((product) => {
        return product.name.match(this.search)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style scoped>
.main-content {
  background: rgba(190, 195, 202, 0.3);
}
.cart-container {
  background: #FFFFFF;
  border: 1px solid #CECECE;
}
/* Modal Checkout */
.shadow {
    background: #FFFFFF;
    border: 1px solid #CECECE;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.item-checkout {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
}

.footer-btn {
    display: block;
    margin: 0 auto;
    text-align: center;
}

button.print {
    background: #F24F8A;
}
button.send {
    background: #57CAD5;
}

.footer-btn button.btn {
    width: 300px;
    border-radius: 10px;
    font-size: 20px;
    color: #FFFFFF;
}

</style>
