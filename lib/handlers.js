const fortune = require('./fortune')
const {render} = require("express/lib/application");

exports.home = (req, res) => res.render('home')
exports.about = (req, res) => res.render('about', { fortune: fortune.getFortune() })

exports.newsletterSignup = (req, res) => {
    res.render('newsletter-signup', { csfr: 'CSFR token goes here'})
}

exports.newsletterSignupProcess = (req, res) => {
    console.log('Form (from querystring): ' + req.query.form)
    console.log('CSFR token (from hidden form field): ' + req.body._csfr)
    console.log('Name (from visible form field): ' + req.body.name)
    console.log('Email (from visible form field): ' + req.body.email)
    res.redirect(303, '/newsletter-signup/thank-you')
}

exports.newsletterSignupThankYou = (req, res) => res.render('newsletter-signup-thank-you')

exports.notFound = (req, res) => res.render('404')
/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */