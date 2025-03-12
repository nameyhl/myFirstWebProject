<template>
    <div class="body">
        <div class="title">
            <Menu :memuList="memuList"></Menu>
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

let memuList = ref([
    { name: '小米官网', path: '/' },
    { name: '小米商城', path: '/shop' },
    { name: '小米澎湃OS', path: '/hyperos' },
    { name: '小米汽车', path: '/car' },
])
let carouselList = ref([
    { src: '@/assets/carsousel/carousel1.jpg', alt: 'carousel1' },
    { src: '@/assets/carsousel/carousel2.jpg', alt: 'carousel2' },
    { src: '@/assets/carsousel/carousel3.jpg', alt: 'carousel3' },
])

</script>
<style lang="sass" scoped>

</style>