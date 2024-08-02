<template>
  <div class="flex justify-center items-center flex-col h-screen">
    <HeaderComponent />
    <div>
      <BalanceComponent />
      <IncomeExpensesComponent />
      <TransactionListComponent />
      <AddTransactionComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import BalanceComponent from './components/Balance.vue'
import IncomeExpensesComponent from './components/IncomeExpenses.vue'
import TransactionListComponent from './components/TransactionList.vue'
import AddTransactionComponent from './components/AddTransaction.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    BalanceComponent,
    IncomeExpensesComponent,
    TransactionListComponent,
    AddTransactionComponent
  }
}
</script>