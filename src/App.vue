<template>
  <div class="box-border bg-gray-50 flex flex-col items-center justify-center min-h-0 m-0 p-4 h-screen">
    <div class="box-border w-full md:w-3/4 lg:w-1/4">
      <div>
        <HeaderComponent />
      </div>
      <div>
        <div>
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