<template>
  <div class="detaileBody">
    <div class="carousel">
      <Carousel :carouselList="carouselList"></Carousel>
    </div>
    <div class="countDown">
      <CountDown></CountDown>
    </div>
    <div class="telescopic">
      <Telescopic :imgs="imgs"></Telescopic>
    </div>
    <div class="tabPage">
      <TabPage :tabPages="tabPages"></TabPage>
    </div>
    <div class="chackBox">
      <ChackList></ChackList>
    </div>
  </div>
</template>

<script setup>
import Carousel from '@/components/carousel/index.vue'
import Telescopic from '@/components/telescopic/index.vue'
import TabPage from '@/components/tabsPage/index.vue'
import CountDown from '@/components/countDown/index.vue'
import ChackList from '@/components/chackList/index.vue';
import { ref } from 'vue';

// 直接导入图片
import carousel1 from '@/assets/carsousel/carousel1.jpg';
import carousel2 from '@/assets/carsousel/carousel2.jpg';
import carousel3 from '@/assets/carsousel/carousel3.jpg';

let carouselList = ref([
  { src: carousel1, alt: 'carousel1' },
  { src: carousel2, alt: 'carousel2' },
  { src: carousel3, alt: 'carousel3' },
]);

import img1 from '@/assets/imgs/animal1.jpg';
import img2 from '@/assets/imgs/animal2.jpg';
import img3 from '@/assets/imgs/animal3.jpg';
let imgs = ref([
  { src: img1, alt: 'img1' },
  { src: img2, alt: 'img2' },
  { src: img3, alt: 'img3' },
])

let tabPages = ref([
  { name: 'tab1', text: 'tab1' },
  { name: 'tab2', text: 'tab2' },
  { name: 'tab3', text: 'tab3' },
])
</script>

<style lang="scss" scoped>
.detaileBody {
  margin-bottom: 50px;
}
.chackBox{
  margin-top: 20px;
}
</style>
