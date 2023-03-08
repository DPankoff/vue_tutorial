<template>
  <div class="home">
    <div>
      {{storeCounter.count}} 
    </div> 
    <div class="buttons">
    <button @click="storeCounter.increaseCount">+</button>
    <button @click="storeCounter.decreaseCount">-</button>
  </div> 
  <hr/>
    This counter is {{ storeCounter.oddOrEven  }} 
  </div>

</template>

<script setup>

// import {ref, computed} from 'vue'
import { useCounterStore } from '@/store/counter.js'

const storeCounter = useCounterStore()

// const count = ref(0)

// const increaseCount = () => {
//   console.log('increaseCount')
//   count.value++
// }

// const decreaseCount = () => {
//   console.log('decreaseCount')
//   count.value--
// }

// const oddOrEven  = computed( () => {
//   if (count.value % 2 === 0) return 'even' 
//     return 'odd'
// })

</script>

<style>

.buttons button{
  font-size: 60px;
  
}

.home {
  font-size: 60px;
  display: block;
  text-align: center;
}

</style>