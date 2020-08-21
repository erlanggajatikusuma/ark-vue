<template>
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mt-3 p-5">
                <h4>Today's Income</h4>
                <h2>Rp. 1.000.000</h2>
                <h4>+2% Yesterday</h4>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
    .card {
        width: 400px;
        height: 213px;
        background: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
        filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
        border-radius: 10px;
    }
    @media screen and (max-width:1300px) {
        .card {
            width: 100%;
        }
    }
    @media screen and (max-width: 960px){
        .card {
            width: 100%;
        }
    }
</style>
