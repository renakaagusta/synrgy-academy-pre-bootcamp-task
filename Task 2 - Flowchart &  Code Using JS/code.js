const creditCard = {
    id: '123',
    holderName: 'Renaka Agusta',
    provider: 'XYZ',
    limit: 1000000
}

const listOfValidCardByProvider = {
    'XYZ': ['123', '124', '125', '126'],
    'ABC': ['223', '224', '225', '226']
}

const listOfItem = [
    {
        'id': '1',
        'name': 'barang A',
        'price': 2000
    },
    {
        'id': '2',
        'name': 'barang B',
        'price': 22000
    },

]

const bill = {
    items: [
        {
            'id': '1',
            'quantity': 4,
        },
        {
            'id': '2',
            'quantity': 3,
        }
    ]
}

const cardIsValid = listOfValidCardByProvider[creditCard['provider']].includes(creditCard['id'])

if (!cardIsValid) {
    console.log("Your card isnt valid. Please change your payment Method")
    return
}

let totalPayment = 0

bill['items'].map((buyItem) => {
    totalPayment += listOfItem.filter((item) => item['id'] == buyItem['id'])[0]['price'] * buyItem['quantity']
})

if (creditCard['limit'] < totalPayment) {
    console.log("Your limit isn't enough. Please change your payment Method")
    return
}

creditCard['limit'] -= totalPayment

console.log('Payment success')
console.log('total payment: ' + totalPayment)
console.log('your limit: ' + creditCard['limit'])

const creditCard = {
    id: '123',
    holderName: 'Renaka Agusta',
    provider: 'XYZ',
    limit: 1000000
}

const listOfValidCardByProvider = {
    'XYZ': ['123', '124', '125', '126'],
    'ABC': ['223', '224', '225', '226']
}

const listOfItem = [
    {
        'id': '1',
        'name': 'barang A',
        'price': 2000
    },
    {
        'id': '2',
        'name': 'barang B',
        'price': 22000
    },

]

const bill = {
    items: [
        {
            'id': '1',
            'quantity': 4,
        },
        {
            'id': '2',
            'quantity': 3,
        }
    ]
}

const cardIsValid = listOfValidCardByProvider[creditCard['provider']].includes(creditCard['id'])

if (!cardIsValid) {
    console.log("Your card isnt valid. Please change your payment Method")
    return
}

let totalPayment = 0

bill['items'].map((buyItem) => {
    totalPayment += listOfItem.filter((item) => item['id'] == buyItem['id'])[0]['price'] * buyItem['quantity']
})

if (creditCard['limit'] < totalPayment) {
    console.log("Your limit isn't enough. Please change your payment Method")
    return
}

creditCard['limit'] -= totalPayment

console.log('Payment success')
console.log('total payment: ' + totalPayment)
console.log('your limit: ' + creditCard['limit'])