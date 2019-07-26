const express = require('express')

const app = express()

app.use('/api', require('./routers/products'))


//Variable for port 
// !I need to know how to host it on Hoster.kz
port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Servier is listening on porn ${port}`)
})