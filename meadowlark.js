const express = require('express')
const expressHandlebars= require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

const handlers = require('./lib/handlers')

app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))
app.get('/', handlers.home)
app.get('/about', handlers.about)
// Custom 404 page
app.use(handlers.notFound)
// Custom 500 page
app.use(handlers.serverError)

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`
))