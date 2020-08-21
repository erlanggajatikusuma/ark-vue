<template>
    <div>
        <button class="btn btn-two font-weight-bold py-2 mb-2 btn-block" data-toggle="modal" data-target="#modalCheckout">
            Checkout
        </button>
    </div>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
    .btn-two {
        color: #fff;
        background-color: #57cad5;
    }
    .btn-two:hover {
        color: #fff;
        background-color: #41c5d1;
    }
</style>
