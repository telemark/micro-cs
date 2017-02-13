'use strict'

const axios = require('axios')

module.exports = opts => {
  return new Promise((resolve, reject) => {
    axios(opts.request)
    .then(resolve)
    .catch(reject)
  })
}
