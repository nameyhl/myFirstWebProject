<template>
  <div class="manu">
    <div class="brand">
      <div>
        <img :src="brand.logo" alt="" width="50px" height="50px" />
      </div>
      <div style="margin-left: 10px;">{{ brand.name }}</div>
    </div>
    <div class="manu-item-box">
      <div class="manu-item" v-for="item in memuList" :key="item.path">{{ item.name }}</div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
let props = defineProps({
  memuList: {
    type: Array,
    default: []
  },
  brand: {
    type: Object,
    default: {}
  }
})
</script>
<style lang="scss" scoped>
.manu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .manu-item-box {
    display: flex;
    align-items: center;
    justify-content: center;

    .manu-item {
      padding: 10px 20px;

      &:hover {
        cursor: pointer;
        color: #409eff;
        font-weight: 600;
      }
    }
  }


  .brand {
    display: flex;
    font-size: 20px;
    font-weight: 900;
    height: 50px;
    line-height: 50px;
    color: #ff6b01
  }
}
</style>
