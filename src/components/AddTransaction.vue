<template>
    <h3 class="text-base font-bold border-b-2 border-black pb-1 mt-10 mx-0 mb-3">Add New Transaction</h3>
    <form>
        <div>
            <label class="inline-block mx-0 my-3 font-semibold" for="text">Name</label>
            <input class="border border-gray-300 rounded-sm block text-xs p-2 w-full" type="text" id="text">
        </div>
        <div>
            <label class="inline-block mx-0 my-3 font-semibold" for="amount">Amount</label>
            <input class="border border-gray-300 rounded-sm block text-xs p-2 w-full" type="number" id="amount">
        </div>
        <button
            class="transition-all duration-100 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded shadow-md w-full mt-3 block mb-8">
            Add Transaction
        </button>
    </form>
</template>

<script>
export default {
    name: 'AddTransactionComponent'
}
</script>