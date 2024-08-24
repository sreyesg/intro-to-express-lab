const express = require('express')
const validator = require('validator')
const app = express()



// Greet Route 
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username
    res.send(`<h1>what a delight to see you once more, ${username}</h1>`)
})

// rolling the dice
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

app.listen(3000, () => {
    console.log('listening on port 3000🎧')
})