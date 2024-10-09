const express = require('express')
const validator = require('validator')
const app = express()



// 1. Be polite Greet the user 
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username
    res.send(`<h1>what a delight to see you once more, ${username}</h1>`)
})

// 2. Rolling the dice
app.get('/roll/:number', (req, res) => {
    const validateNumber = validator.isNumeric(req.params.number)
    const number = req.params.number
    console.log(validateNumber)
    if (validateNumber === false) {
        res.send('<h1>you must type in a number</h1>')
    }else {
        randomNumber = Math.floor(Math.random()*number )
        res.send(`<h1> your rolls is: ${randomNumber} </h1>`)
        console.log(randomNumber)
    }
})

// 3. I want THAT One! Route

const collectibles = [
    {name: 'shiny ball', price: 5.95},
    {name: 'autographed picture of a dog', price: 10},
    {name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99},
]
app.get('/collectibles/:index', (req, res)=> {
   
        const index = req.params.index
        console.log(index)
        if (collectibles[index] === undefined) {
            res.send('<h1>This item is not yet in stock. Check back soon!</h1>')    
        }else {
            itemName = collectibles[index].name
            itemPrice = collectibles[index].price
            response = 
            res.send(`<h1>so, you want the ${itemName}? for ${itemPrice}, it can be yours</h1>`)
        }
})

// Using query parameters.
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    
    if (Object.keys(req.query).length === 0) {
        res.send(shoes)
    
    } else {
    const minPrice = req.query.minPrice
    const maxPrice = req.query.maxPrice
    const qType = req.query.type
   
    
    const filteredShoes = shoes.filter((shoe) => {
        
        return shoe.price >= minPrice || shoe.price <= maxPrice || shoe.type === qType    
        }
    )
    res.send(filteredShoes)
    }
})


// add listener
app.listen(3000, () => {
    console.log('listening on port 3000🎧')
})