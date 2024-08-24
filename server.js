const express = require('express')
const app = express()

// Greet Route 
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username
    res.send(`<h1>what a delight to see you once more, ${username}</h1>`)
})


app.listen(3000, () => {
    console.log('listening on port 3000🎧')
})