<template>
    <h3 class="text-lg font-bold border-b-2 border-black pb-1 mt-10 mx-0 mb-3">History</h3>
    <ul class="list-none p-0 mb-10">
        <li class="bg-white shadow-md text-gray-600 flex justify-between relative p-3 mx-0 my-3 border-r-4 border-red-600">
            Cash <span>-R$ 400,00</span><button>X</button>
        </li>
        <li class="bg-white shadow-md text-gray-600 flex justify-between relative p-3 mx-0 my-3 border-r-4 border-green-600">
            Paycheck <span>R$ 400,00</span><button>X</button>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TransactionListComponent'
}
</script>