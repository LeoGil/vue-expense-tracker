<template>
  <h3 class="text-lg font-bold border-b-2 border-black pb-1 mt-10 mx-0 mb-3">Balance</h3>
  <h1 class="text-4xl font-bold">R$ {{ balance }}</h1>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  balance: {
    type: Number,
    required: true,
  },
});
</script>