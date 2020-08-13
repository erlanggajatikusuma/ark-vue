<template>
    <div>
        <h1>Product Page</h1>
        <div class="row">
            <div class="col-md-4" v-for="product in products" :key="product.id">
                <Card :data="product"/>
            </div>
        </div>

    </div>
</template>

<script>
import Card from '../../components/_base/card'
import axios from 'axios'
export default {
  name: 'Product',
  components: {
    Card
  },
  data () {
    return {
      products: [
        // { id: 1, name: 'Nasi Goreng', price: 10000 },
        // { id: 2, name: 'Ayam Goreng', price: 8000 },
        // { id: 3, name: 'Magelangan', price: 12000 },
        // { id: 4, name: 'Indomie', price: 8000 }
      ]
    }
  },
  methods: {
    getData () {
      // axios.get('http://www.omdbapi.com/?apikey=2a900c47&s=avengers')
      //   .then(res => {
      //     console.log(res.data.Search)
      //     this.products = res.data.Search
      //   })
      axios.get('http://localhost:3000/api/v1/product/?page=1&limit=9')
        .then(res => {
          console.log(res.data.result)
          this.products = res.data.result
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>

</style>
