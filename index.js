'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const methods = require('./lib/methods')
const cs = require('./lib/cs')

module.exports = async (req, res) => {
  const {query, pathname} = await parse(req.url, true)
  const data = req.method === 'POST' ? await json(req) : query
  let result = {}
  if (!pathname || pathname === '/') {
    const readme = readFileSync('./README.md', 'utf-8')
    res.setHeader('Content-Type', 'text/html')
    result = marked(readme)
  } else {
    try {
      const jwt = req.headers.authorization
      const method = methods(pathname)
      const tmp = await cs({jwt: jwt, csMethod: method, data: data})
      result = { id: tmp }
    } catch (e) {
      result = e.message || e
    }
  }
  let status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  send(res, status, result)
}
