const express = require('express')
const expressHandlebars= require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

const handlers = require('./lib/handlers')

app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'))
app.get('/', handlers.home)
app.get('/about', handlers.about)
app.get('/newsletter-signup', handlers.newsletterSignup)
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess)
app.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou)
// Custom 404 page
app.use(handlers.notFound)
// Custom 500 page
app.use(handlers.serverError)

if (require.main === module) {
    app.listen(port, () => console.log(
        `Express started on http://localhost:${port}; ` +
        `press Ctrl-C to terminate.`
    ))
} else {
    module.exports = app
}