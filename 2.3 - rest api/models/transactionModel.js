let transactions = [
    {
        transactionId: '123456789',
        sourceId: '12345',
        destinationId: '67890',
        amount: 5.0,
        timestamp: '2023-06-01T00:00:00.000Z'
    }
]
function generateTransactionId(){
    return Math.random().toString(10).substr(2,6)
}

function createTransaction(sourceId, destinationId, amount) {
    const transaction = {
        transactionId : generateTransactionId(),
        sourceId,
        destinationId,
        amount,
        timestamp : new Date().toString()
    }

    transactions.push(transaction)
    return transaction
}


module.exports = {
    createTransaction
}