import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

// 一个状态就存储一类要共享的数据（存一类常量）
export const useCounterStore = defineStore('counter', () => {
  // 定义状态的初始值
  const count = ref(0)
  // 定义变量的计算逻辑 getter
  const doubleCount = computed(() => count.value * 2)

  // 定义怎么更改状态的方法
  function increment() {
    count.value++
  }

  // 返回
  return { count, doubleCount, increment }
})
