<template>
    <div class="body">
        <div class="carousel">
            <img :src="img.src" :alt="img.alt">
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
    carouselList: {
        type: Array,
        default: () => []
    },

})

let img = ref({})
let interval = ref(null)
console.log(props.carouselList);

let num = 0
interval.value = setInterval(() => {
    num = ++num % props.carouselList.length
    img.value = props.carouselList[num]
}, 3000)
</script>

<style lang="scss" scoped></style>