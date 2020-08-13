<template>
<div>
        <!-- <div class="card m-4">
            <a href="#">
                <img :src="data.Poster" class="card-img" alt="">
            </a>
            <p class="text-wrap">{{data.Title}}</p>
            <h5>{{data.Year}}</h5>
        </div> -->
        <div class="card m-4">
            <a href="#">
                <img :src="data.image" class="card-img" alt="">
            </a>
            <p class="text-wrap">{{data.name}}</p>
            <h5>{{data.price}}</h5>
        </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
    .card {
        width: 250px;
    }
    .card-img {
        border-radius: 10px;
        width: 250px;
        height: 200px;
        cursor: pointer;
    }
</style>
