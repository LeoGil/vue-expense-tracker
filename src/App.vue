<template>
  <div class="box-border bg-gray-50 flex flex-col items-center justify-center min-h-0 m-0 p-4 h-screen">
    <div class="box-border w-full md:w-3/4 lg:w-1/5">
      <div>
        <HeaderComponent />
      </div>
      <div>
        <div>
          <BalanceDisplayComponent :balance="balance" />
        </div>
        <IncomeExpensesComponent :income="income" :expense="expense" />
        <TransactionListComponent :transactions="transactions" />
        <AddTransactionComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from './components/Header.vue'
import BalanceDisplayComponent from './components/BalanceDisplay.vue'
import IncomeExpensesComponent from './components/IncomeExpenses.vue'
import TransactionListComponent from './components/TransactionList.vue'
import AddTransactionComponent from './components/AddTransaction.vue'

import { ref, computed } from 'vue'

const transactions = ref([
  { id: 1, text: 'Cash', amount: -400 },
  { id: 2, text: 'Paycheck', amount: 400 },
  { id: 3, text: 'Food', amount: -100 },
  { id: 4, text: 'Dividends', amount: 1000 }
]);

//Get total balance
const balance = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount
  }, 0).toFixed(2)
})

//Get total income
const income = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0).toFixed(2)
})

//Get total expenses
const expense = computed(() => {
  return Math.abs(transactions.value
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
  ).toFixed(2)
})
</script>