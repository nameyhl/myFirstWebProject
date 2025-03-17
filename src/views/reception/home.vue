<template>
    <div class="title">
        <Menu :brand="brand" :memuList="memuList"></Menu>
    </div>
    <RouterView />
</template>
<script setup>
import Menu from '@/components/menu/index.vue'
import { RouterView } from 'vue-router';
import brandLogo from '@/assets/carsousel/brandLogo.jpg';
import { ref } from 'vue';

let brand = ref({
    logo: brandLogo,
    name: '小米'
})

let memuList = ref([
    { name: '小米官网', path: '/' },
    { name: '小米商城', path: '/shop' },
    { name: '小米澎湃OS', path: '/hyperos' },
    { name: '小米汽车', path: '/car' },
])
</script>
<style lang="sass" scoped>

</style>