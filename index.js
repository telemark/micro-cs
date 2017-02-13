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
    result = marked(readme)
  } else {
    try {
      const method = methods(pathname)
      const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVuZ2oiLCJpYXQiOjE0ODY5OTc3NTgsImV4cCI6MTQ4NzAwMTM1OCwiaXNzIjoiaHR0cHM6Ly9hdXRoLnQtZmsubm8ifQ.StuT0x4Eap7eJdz0MiXGqVZ7BBvFBC8_sxJduiaFG0o'
      result = await cs({jwt: jwt, csMethod: method})
    } catch (e) {
      result = e.message || e
    }
  }
  let status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, status, result)
}
