'use strict'

const axios = require('axios')

module.exports = opts => {
  return new Promise((resolve, reject) => {
    console.log(opts.request)
    axios(opts.request)
      .then(r => {
        console.log(r.data)
        resolve(r)
      })
      .catch(reject)
  })
}
