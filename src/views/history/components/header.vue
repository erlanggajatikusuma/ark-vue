<template>
    <div class="header d-flex text-center">
        <div class="d-flex align-items-center">
            <img class="ml-4" src="../../../assets/menu.png">
        </div>
        <h2 class="d-flex align-items-center">History</h2>
    </div>
</template>

<script>
export default {
  name: 'Header-history'
}
</script>

<style scoped>
    .header {
        background: #FFFFFF;
        width: 100%;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        height: 100px;
    }
    h2 {
        display: block;
        margin: 0 auto;
    }
</style>
