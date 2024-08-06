<template>
    <div class="bg-white shadow-md rounded pt-4 pb-4 mb-4 flex justify-between">
        <div class="flex-1 text-center border-r-gray-500 border-r">
            <h4>Income</h4>
            <p class="text-xl my-3 text-green-500">+R$ 0,00</p>
        </div>
        <div class="flex-1 text-center">
            <h4>Expense</h4>
            <p class="text-xl my-3 text-red-500">-R$ 0,00</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IncomeExpensesComponent'
}
</script>