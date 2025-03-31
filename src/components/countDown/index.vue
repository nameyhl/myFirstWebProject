<template>
  <div class="body">
    <div class="targetTime">
      <div class="time">
        距离{{ targetYear }}年{{ targetMonth }}月{{ targetDay }}日{{ targetHour }}时{{ targetMinute }}分
      </div>
    </div>
    <div class="timeBox">
      <div class="day">{{ day }}</div>天
      <div class="hour">{{ hour }}</div>时
      <div class="minute">{{ minute }}</div>分
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let day = ref('00')
let hour = ref("00")
let minute = ref("00")

let targetTime = new Date(`2025-6-5 18:00:00`)
let targetDate = addZero(targetTime.getTime())
let targetYear = addZero(targetTime.getFullYear())
let targetMonth = addZero(targetTime.getMonth() + 1)
let targetDay = addZero(targetTime.getDate())
let targetHour = addZero(targetTime.getHours())
let targetMinute = addZero(targetTime.getMinutes())

const getTime = () => {
  let nowTime = new Date()
  let nowDate = nowTime.getTime()
  let needTime = targetDate - nowDate

  hour.value = addZero(Math.floor(needTime / 1000 / 60 / 60 % 24))
  minute.value = addZero(Math.floor(needTime / 1000 / 60 % 60))
  day.value = addZero(Math.floor(needTime / 1000 / 60 / 60 / 24))

  if (needTime < 0) {
    clearInterval(interval)
  }
}

// 补零函数
function addZero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

let interval = setInterval(() => {
  getTime()
}, 1000)



</script>

<style lang="scss" scoped>
.body {
  width: 900px;
  height: 600px;
  margin: 0 auto;
  background-color: #409eff;
  align-items: center;

  .targetTime {
    color: #fff;
    width: 900px;
    height: 500px;
    font-size: 20px;
    font-weight: 900;
    background: url('@/assets/countDown_bg.jpg') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .time {
      background-color: #093d74;
    }
  }

  .timeBox {
    width: 900px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 800;
    color: #fff
  }
}
</style>
