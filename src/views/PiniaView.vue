<template>
    <div class="home">
        <router-link to="/">Home</router-link>
        <div class="count">
            {{ count }}
        </div>
    </div>
    <div class="buttons">
        <button>+</button>
        <button>-</button>
    </div>
</template>

<script setup>

import {ref} from 'vue'

const count = ref(10)

</script>



<style>

.count {
    font-size: 60px;
    margin: 20px;
}

.buttons button{
    font-size: 60px;
}

</style>