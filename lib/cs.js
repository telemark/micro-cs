'use strict'

const config = require('../config')
const buildUrl = require('./build-url.js')
const validateJwt = require('./validate-jwt')
const sendData = require('./send-data')

module.exports = opts => {
  const init = Object.assign({}, config, opts)
  return new Promise((resolve, reject) => {
    validateJwt(init)
      .then(buildUrl)
      .then(sendData)
      .then(res => {
        resolve(res.data || 'Sent')
      })
      .catch(reject)
  })
}
