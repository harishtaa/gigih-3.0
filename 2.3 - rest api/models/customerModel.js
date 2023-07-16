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


function createCustomer(name, email, balance){
    let newCustomer = {
        customerId: generateCustomerId(),
        name: name,
        email: email,
        balance: balance,
    }

    return newCustomer;
}

function generateCustomerId(){
    return Math.random().toString(10).substring(2,6)
}

module.exports = {
    getAllCustomers,
    getCustomer,
    createCustomer
}