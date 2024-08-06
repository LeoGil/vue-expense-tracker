<template>
  <div class="flex justify-center items-center flex-col h-screen">
    <div class="items-center flex flex-col max-w-max">
      <div class="mb-4">
        <HeaderComponent />
      </div>
      <div>
        <div class="mb-4">
          <BalanceComponent />
        </div>
        <IncomeExpensesComponent />
        <TransactionListComponent />
        <AddTransactionComponent />
      </div>
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