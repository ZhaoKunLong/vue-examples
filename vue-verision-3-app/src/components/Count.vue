<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
const increment = () => {
    count.value++
}
</script>
<template>
    <div>
        <label for="count">{{ count }}</label>
        <button id="count" @click="increment">count is {{ count }}</button>
    </div>
</template>    