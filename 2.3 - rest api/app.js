const express = require('express')
const app = express()
const port = 3000

let customers = [
    {
        customerId: '1234',
        name: 'Bu',
        email: 'bububu@gmail.com',
        balance: 5000.00
    },
    {
        customerId: '1233',
        name: 'Nu',
        email: 'nununun@gmail.com',
        balance: 100.00
    }
]

function getAllCustomers() {
    return customers;
}

function getCustomer(customerId) {
    return customers.find((c)=> c.customerId === customerId  )
}

function generateTransactionId(){
    return Math.random().toString(10).substr(2,6)
}

let transactions = []
function createTransaction(sourceId, destinationId, amount) {
    const transaction = {
        transactionId : generateTransactionId(),
        sourceId,
        destinationId,
        amount,
        timestamp : new Date.toString()
    }

    transactions.push(transaction)
}

function transfer(sourceId, destinationId, amount){
    sourceAccount = getCustomer(sourceId)
    destinationAccount = getCustomer(destinationId)

    if(!sourceAccount || !destinationAccount){
        throw new Error("Invalid source or destination account")
    }
    if (sourceAccount.balance <amount) {
        throw new Error("Insufficent balance in the source account")
    }

    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;
    createTransaction(sourceAccount.customerId, destinationAccount.destinationId, amount)
}

app.post('/customer/:id', (req, res) => {
    customerId = req.params.id
    if(!getCustomer(customerId)){
        res.status(500).json({error: e.message})
    }
    getCustomer(customerId)
})

app.post('/transaction', (req, res) => {
    try {
        const {sourceAccount, destinationAccount, amount} = req.body
        if (!sourceAccount || !destinationAccount || !amount){
            throw new Error("Insufficient Parameter")
        }
        transfer(sourceAccount, destinationAccount, amount)
        res.status(201).json({message: "Transaction created successfully"})
    }catch(e){
        res.status(500).json({error: e.message})
    }
})


app.listen(port, () => {
    console.log(`Runnin on port ${port}`)
})
  