<template>
    <h3>Add New Transaction</h3>
    <form>
        <div>
            <label for="text">Name</label>
            <input type="text" id="text">
        </div>
        <div>
            <label for="amount">Amount</label>
            <input type="number" id="amount">
        </div>
        <button>Add Transaction</button>
    </form>
</template>

<script>
    export default {
        name: 'AddTransactionComponent'
    }
</script>