<template>
    <div class="body">
        <div class="carousel ">
            <img :src="img.src" :alt="img.alt" width="100%" height="500px">
            <!-- 轮播图切换按钮 -->
            <div class="leftBold bold" @click="changeCarousel('left')">
                <el-icon>
                    <ArrowLeftBold />
                </el-icon>
            </div>
            <div class="rightBold bold" @click="changeCarousel('right')">
                <el-icon>
                    <ArrowRightBold />
                </el-icon>
            </div>
            <!-- 下方滚轮 -->
            <div class="stripBox">
                <div class="strip" :class="{ 'chackStrip': item === num % props.carouselList.length + 1 }"
                    v-for="item in props.carouselList.length" :key="item" @click="chackStrip(item)"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'

const props = defineProps({
    carouselList: {
        type: Array,
        default: () => []
    },

})

let num = 0

let img = ref({})
img.value = props.carouselList[num]
let interval = ref(null)

// 启动轮播
const startCarousel = () => {
    interval.value = setInterval(() => {
        num = ++num % props.carouselList.length;
        img.value = props.carouselList[num];
    }, 3000);
};

// 暂停轮播
const pauseCarousel = () => {
    clearInterval(interval.value);
    interval.value = null;
};

const changeCarousel = (direction) => {
    if (interval.value) {
        pauseCarousel()
    }
    if (direction === 'left') {
        if (num === 0) {
            num = props.carouselList.length - 1
        }
        num = --num % props.carouselList.length
    } else {
        num = ++num % props.carouselList.length
    }
    img.value = props.carouselList[num]
    setTimeout(() => {
        startCarousel()
    }, 10000)
}

const chackStrip = (item) => {
    num = item - 1
    if (interval.value) {
        pauseCarousel()
    }

    img.value = props.carouselList[num]
    setTimeout(() => {
        startCarousel()
    }, 10000)
}
startCarousel()
</script>

<style lang="scss" scoped>
.carousel {
    width: 100%;
    height: 500px;
    position: relative;

    .leftBold {
        position: absolute;
        top: 50%;
        left: 100px;
        transform: translateY(-50%);
        z-index: 100;
    }

    .rightBold {
        position: absolute;
        top: 50%;
        right: 100px;
        transform: translateY(-50%);
        z-index: 100;
    }

    .bold {
        background-color: rgba($color: #f0f0f0, $alpha: 0.5);
        width: 80px;
        height: 80px;
        border-radius: 50%;
        line-height: 90px;
        text-align: center;
        font-size: 50px;

        &:hover {
            cursor: pointer;
        }
    }

    .stripBox {
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, -50%);

        .strip {
            width: 100px;
            height: 5px;
            background-color: rgba($color: #f0f0f0, $alpha: 0.5);
            margin-right: 10px;

            &:hover {
                cursor: pointer;
            }
        }

        .chackStrip {
            background-color: rgba($color: #fff, $alpha: 0.8);
        }

    }
}
</style>