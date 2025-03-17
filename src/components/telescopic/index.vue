<template>
  <div class="body">
    <div class="imgBox" v-for="img in imgs" @mouseenter="enterDiv(img.alt)" @mouseleave="leaveDiv(img.alt)"
      :id="img.alt" :key="img.alt">
      <img :src="img.src" :alt="img.alt">
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  imgs: {
    type: Array,
    default: () => []
  }
})

const enterDiv = (item) => {
  let items = []
  props.imgs.forEach((el) => {
    if (el.alt !== item) {
      items.push(el.alt)
    }
  })
  items.forEach((item) => {
    document.getElementById(item).style.width = '200px';
  })
  document.getElementById(item).style.width = '500px';
}

const leaveDiv = (item) => {
  document.getElementById(item).style.width = '200px';
  document.getElementById("img2").style.width = '500px';
}
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  width: 900px;
  margin: 0 auto;

  .imgBox {
    width: 200px;
    transition: width 0.5s ease;

    &:nth-child(2) {
      width: 500px;
    }

    img {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
