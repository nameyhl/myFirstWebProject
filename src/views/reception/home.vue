<template>
    <div class="body">
        <div class="title">
            <Menu :memuList="memuList"></Menu>
        </div>
    </div>
</template>
<script setup>
import Menu from '@/components/menu/index.vue'
import { ref } from 'vue';

let memuList = ref([
    { name: '小米官网', path: '/' },
    { name: '小米商城', path: '/shop' },
    { name: '小米澎湃OS', path: '/hyperos' },
    { name: '小米汽车', path: '/car' },
])
</script>
<style lang="sass" scoped>

</style>