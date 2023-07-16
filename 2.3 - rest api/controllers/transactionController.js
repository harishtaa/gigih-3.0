const { transfer } = require('../services/transactionService');
const { getCustomer } = require('../models/customerModel');

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/customer/:id', (req, res) => {
    const customerId = req.params.id
    const customer = getCustomer(customerId)
    if(!customer){
        res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer)
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

module.exports = app