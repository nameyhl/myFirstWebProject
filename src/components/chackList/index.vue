<template>
  <div class="chackBox">
    <div class="chackTitle">
      <div class="chackName" v-for="item in chackList" :key="item.name" @click="changeName(item.list)" :class="showList === item.list ? 'isChack' : ''">{{ item.name }}</div>
    </div>
    <div class="chakBody">
      <div v-for="item in showList" class="chackList" :key="item" @click="chackSentence(item)" :class="chacked.indexOf(item) !== -1 ? 'chacked' : ''">{{ item }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

let chackList = ref([
  { name: 'name1', list: ['name1 list1', 'name1 list2', 'name1 list3', 'name1 list4', 'name1 list5'] },
  { name: 'name2', list: ['name2 list1', 'name2 list2', 'name2 list3', 'name2 list4', 'name2 list5'] },
  { name: 'name3', list: ['name3 list1', 'name3 list2', 'name3 list3', 'name3 list4', 'name3 list5'] },
  { name: 'name4', list: ['name4 list1', 'name4 list2', 'name4 list3', 'name4 list4', 'name4 list5'] }
])

let showList = ref([])
showList.value = chackList.value[0].list
const changeName = (list) => {
  showList.value = list
  console.log(showList.value);
}

let chacked = ref([])
const chackSentence = (item) => {
  if(chacked.value.indexOf(item) === -1){
    chacked.value.push(item);
  }else{
    // 删除该项
    chacked.value.splice(chacked.value.indexOf(item), 1);
  }
  console.log(chacked.value);
}

</script>
<style lang="scss" scoped>
.chackBox{
  width: 80vw;
  margin: 0 auto;

  .chackTitle{
    display: flex;
    height: 50px;
    line-height: 50px;
    justify-content: center;

    .chackName{
      width: 150px;
      text-align: center;
      margin: 0 10px;

      &:hover{
        cursor: pointer;
      }
    }
    .isChack{
      background-color: #409eff;
      color: #fff;
    }

  }
  .chakBody{
    .chackList{
      height: 30px;
      line-height: 30px;
      background-color: #fff;
      margin-top: 5px;
      padding-left: 10px;
      &:hover{
        background-color: #409eff;
        color: #fff;
        cursor: pointer;
      }
    }
    .chacked{
      background-color: #409eff;
      color: #fff
    }
  }
}
</style>
