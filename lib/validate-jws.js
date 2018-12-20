'use strict'

const jws = require('jws')

module.exports = opts => {
  if (!opts) {
    throw Error('Missing required input: opts')
  }
  if (!opts.jws) {
    throw Error('Missing required input: opts.jws')
  }
  if (!opts.key) {
    throw Error('Missing required input: opts.key')
  }
  return jws.verify(opts.jws, 'HS256', opts.key)
}
