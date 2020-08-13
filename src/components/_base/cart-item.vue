<template>
    <div>
        <div class="cart-item d-flex bg-danger">
            <div class="cart-img p-3">
                <img src="../../assets/bear-select.png" alt="">
            </div>
            <div class="add-item p-3 flex-grow-1">
                <h5>Coffee Latte</h5>
                <div class="add-btn d-flex mt-5">
                    <button type="button">-</button>
                    <input class="text-center" type="text" style="width: 25px;">
                    <button type="button">+</button>
                    <div class="price pl-4">
                        <h6>Rp. 15.000</h6>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="cart-item d-flex bg-danger">
            <div class="cart-img p-2">
                <img src="../../assets/bear-select.png" alt="">
            </div>
            <div class="add-item p-3 flex-grow-1">
                <h5>Coffee Latte</h5>
                <div class="add-btn d-flex mt-5">
                    <button type="button">-</button>
                    <input class="text-center" type="text" style="width: 25px;">
                    <button type="button">+</button>
                    <div class="price pl-4">
                        <h6>Rp. 15.000</h6>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  name: 'CartItem'
}
</script>

<style scoped>

</style>
