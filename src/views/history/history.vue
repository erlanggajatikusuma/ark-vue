<template>
    <div>
        <Head/>
        <div class="main-content d-flex">
            <div class="sidebar d-flex">
                <Sidebar/>
            </div>
            <div class="main-data" style="width:100%">
                <div class="row m-3">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div class="chart bg-warning"></div>
                <Orders/>
            </div>
        </div>
        <h1>Halaman History</h1>
    </div>
</template>

<script>
import Head from './components/header'
import Sidebar from '../../components/_base/sidebar'
import Card from './components/card'
import Orders from './components/orders'

export default {
  name: 'History',
  components: {
    Head,
    Sidebar,
    Card,
    Orders
  }
}
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .chart {
        width: 100%;
        height: 500px;
    }
</style>
