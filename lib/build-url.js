'use strict'

const qs = require('qs')

module.exports = opts => {
  if (!opts) {
    throw Error('Missing required input: opts')
  }
  if (!opts.url) {
    throw Error('Missing required input: opts.url')
  }
  if (!opts.csMethod) {
    throw Error('Missing required input: opts.csMethod')
  }
  const ticket = qs.stringify(opts.data)
  console.log(ticket)
  opts.request = {
    url: `${opts.url}&key=${opts.key}&method=${opts.csMethod}`,
    method: /get/i.test(opts.csMethod) ? 'get' : 'post',
    data: ticket || undefined
  }
  return opts
}
