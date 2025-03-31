export default {
  mounted(el) {
    // 设置元素的初始样式
    el.style.transition = 'transform 0.3s ease' // 添加过渡效果

    // 鼠标移入时，放大 1.2 倍
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'scale(1.2)'
    })

    // 鼠标移出时，恢复原始大小
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'scale(1)'
    })
  },
  unmounted(el) {
    // 清理事件监听器
    el.removeEventListener('mouseenter')
    el.removeEventListener('mouseleave')
  },
}
