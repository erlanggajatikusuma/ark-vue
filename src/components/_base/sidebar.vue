<template>
    <div class="sidebar">
        <div class="p-3 img-drop tex-center">
            <a href="#">
                <img class="mx-auto d-block" src="../../assets/fork.png" alt="">
            </a>
        </div>
        <div class="p-3 img-drop">
            <a href="#">
                <img src="../../assets/clipboard.png" alt="">
            </a>
        </div>
        <div class="p-3 img-drop">
            <a href="#" data-toggle="modal" data-target="#addItem">
                <img src="../../assets/add.png" alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
    .sidebar {
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
    .img-drop{
        width: 99px;
        text-align: center;
    }
</style>
