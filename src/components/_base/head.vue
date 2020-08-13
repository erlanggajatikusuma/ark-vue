<template>
        <div class="header d-flex justify-content-between align-items-center px-3">
            <img class="m-2 img-head" src="../../assets/menu.png">
            <h2>Food Items</h2>
            <img class="img-head" src="../../assets/magnifying-glass.png">
        </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style scoped>
    .header {
        /* border: 1px solid black; */
        height: 100px;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
    .img-head {
        width: 35.35px;
        height: 35px;
    }
</style>
