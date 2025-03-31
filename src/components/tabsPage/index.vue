<template>
  <div class="tabs">
    <div class="tab" v-hover v-for="(item, index) in tabPages" :key="item.name" @click="chosePage(index)">{{ item.name
      }}</div>
  </div>
  <div class="pages">
    <div class="page" v-for="(item, index) in tabPages" :key="item.name">
      <div v-if="pageNum == index">{{ item.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

let props = defineProps({
  tabPages: {
    type: Array,
    default: () => {
      return []
    }
  }
})

const pageNum = ref(1)
const chosePage = (index) => {
  pageNum.value = index
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;

  .tab {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #409eff;
    color: #fff;
    border-radius: 10px;
    margin: 10px 0;

    &:hover {
      cursor: pointer;
    }
  }
}

.pages {
  width: 800px;
  height: 600px;
  background-color: #f0f0f0;
  margin: 50px auto 0 auto;
}
</style>
