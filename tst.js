'use strict'

const config = require('./config')
const generateToken = require('tfk-generate-jwt')
const buildUrl = require('./lib/build-url.js')
const validateJwt = require('./lib/validate-jwt')
const sendData = require('./lib/send-data')

const options = {
  expiresIn: '1h',
  issuer: 'https://auth.t-fk.no'
}
const token = generateToken({key: config.tokenKey, payload: {username: 'engj'}, options: options})

const data = {
  csMethod: 'getTicketCategories',
  jwt: token
}

const opts = Object.assign({}, config, data)
validateJwt(opts)
  .then(buildUrl)
  .then(sendData)
  .then(res => {
    console.log(res.data || 'Sent')
  })
  .catch(err => {
    console.error(err)
  })
