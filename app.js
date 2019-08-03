const express = require('express')
const sql = require('mysql')

const app = express()

//подключение views:
app.set('veiw engine', 'ejs')

//connecting MySQL server database
// const con = sql.createConnection({
//     host: '',
//     username: '',
//     password: ''
// })

// con.connect(err => {
//     if (err) throw err
//     console.log(`MySQL succesfully connected.`)
// })

app.use('/', require('./routes'))


//Variable for port 
// !I need to know how to host it on Hoster.kz
port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Servier is listening on porn ${port}`)
})