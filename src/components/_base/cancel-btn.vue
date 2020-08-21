<template>
    <div>
        <button class="btn btn-one font-weight-bold py-2 btn-block">
            <a href="#">Cancel</a>
        </button>
    </div>
</template>

<script>
export default {
  name: 'CancelButton'
}
</script>

<style scoped>
    .btn-one {
        background-color: #f24f8a;
    }
    .btn-one a{
        color: #fff;}
    .btn-one:hover {
        color: #fff;
        background-color: #ee5f94;
    }
</style>
