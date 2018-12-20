'use strict'

const config = require('../config')
const buildUrl = require('./build-url.js')
const validateToken = require('./validate-jws')
const sendData = require('./send-data')

module.exports = opts => {
  const init = Object.assign({}, config, opts)
  const validToken = validateToken({ key: config.tokenKey, jws: opts.token })
  if (!validToken) {
    throw Error('Invalid token')
  }
  const url = buildUrl(init)
  return new Promise((resolve, reject) => {
    sendData(url)
      .then(res => {
        resolve(res.data || 'Sent')
      })
      .catch(reject)
  })
}
