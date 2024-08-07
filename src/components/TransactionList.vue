<template>
    <h3 class="text-lg font-bold border-b-2 border-black pb-1 mt-10 mx-0 mb-3">History</h3>
    <ul class="list-none p-0 mb-10">
        <li
            class="bg-white shadow-md text-gray-600 flex justify-between relative p-3 mx-0 my-3 border-r-4 border-red-600 font-bold rounded">
            Cash <span>-R$ 400,00</span>
            <button class="cursor-pointer border-0 text-slate-200 text-xl leading-5 px-5 py-0.5 absolute top-2/4 left-0 -translate-x-full -translate-y-1/2 opacity-100 hover:opacity-100 hover:text-red-600 easy-in duration-200">X</button>
        </li>
        <li
            class="bg-white shadow-md text-gray-600 flex justify-between relative p-3 mx-0 my-3 border-r-4 border-green-600 font-bold rounded">
            Paycheck <span>R$ 400,00</span>
            <button class="cursor-pointer border-0 text-slate-200 text-xl leading-5 px-5 py-0.5 absolute top-2/4 left-0 -translate-x-full -translate-y-1/2 opacity-100 hover:opacity-100 hover:text-red-600 easy-in duration-200">X</button>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TransactionListComponent'
}
</script>