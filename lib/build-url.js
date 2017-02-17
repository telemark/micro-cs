'use strict'

const qs = require('querystring')

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
  opts.request = {
    url: `${opts.url}&key=${opts.key}&method=${opts.csMethod}`,
    method: /get/i.test(opts.csMethod) ? 'get' : 'post',
    data: 'ticket=' + qs.escape(JSON.stringify(opts.data)) || undefined
  }
  return opts
}
