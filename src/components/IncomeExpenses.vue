<template>
    <div class="bg-white shadow-md rounded py-5 flex justify-between mx-0 mt-10">
        <div class="flex-1 text-center border-r-gray-200 border-r">
            <h4 class="text-xl font-bold">Income</h4>
            <p class="text-xl my-1 text-green-500 font-bold">R$ {{ income }}</p>
        </div>
        <div class="flex-1 text-center">
            <h4 class="text-xl font-bold">Expense</h4>
            <p class="text-xl my-1 text-red-500 font-bold">R$ {{ expense }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  income: {
    type: Number,
    required: true
  },
  expense: {
    type: Number,
    required: true
  }
})
</script>