<template>
    <div class="body">
        <div class="title">
            <Menu :brand="brand" :memuList="memuList"></Menu>
        </div>
        <div class="carousel">
            <Carousel :carouselList="carouselList"></Carousel>
        </div>
    </div>
</template>
<script setup>
import Menu from '@/components/menu/index.vue'
import Carousel from '@/components/carousel/index.vue'
import { ref } from 'vue';


import brandLogo from '@/assets/carsousel/brandLogo.jpg';
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
// 直接导入图片
import carousel1 from '@/assets/carsousel/carousel1.jpg';
import carousel2 from '@/assets/carsousel/carousel2.jpg';
import carousel3 from '@/assets/carsousel/carousel3.jpg';

let carouselList = ref([
    { src: carousel1, alt: 'carousel1' },
    { src: carousel2, alt: 'carousel2' },
    { src: carousel3, alt: 'carousel3' },
]);
</script>
<style lang="sass" scoped>

</style>