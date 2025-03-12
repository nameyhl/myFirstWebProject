<template>
    <div class="manu">
        <div class="manu-item" v-for="item in memuList" :key="item.path">{{ item.name }}</div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
let props = defineProps({
    memuList: {
        type: Array,
        default: []
    }
})
</script>
<style lang="scss" scoped>
.manu {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    .manu-item {
        padding: 10px 20px;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
}
</style>