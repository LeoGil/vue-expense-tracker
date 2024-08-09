<template>
    <h3 class="text-base font-bold border-b-2 border-black pb-1 mt-10 mx-0">Add New Transaction</h3>
    <form @submit.prevent="onSubmit">
        <div>
            <label class="inline-block mx-0 my-3 font-semibold" for="text">Name</label>
            <input class="border border-gray-300 rounded block text-xs p-2 w-full" type="text" id="text" v-model="text">
        </div>
        <div>
            <label class="inline-block mx-0 my-3 font-semibold" for="amount">Amount</label>
            <input class="border border-gray-300 rounded block text-xs p-2 w-full" type="text" id="amount" v-model="amount">
        </div>
        <button
            class="transition-all duration-100 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded shadow-md w-full mt-3 block mb-8">
            Add Transaction
        </button>
    </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast();

const text = ref('');
const amount = ref('');

const emit = defineEmits(['addTransaction']);

const onSubmit = () => {
    if (text.value.trim() === '' || amount.value.trim() === '') {
        toast.error('Text and amount are required');
        return
    }

    const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text: text.value,
        amount: parseFloat(amount.value)
    }

    emit('addTransaction', newTransaction);

    text.value = '';
    amount.value = '';
}
</script>