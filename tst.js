const config = require('./config')
const generateToken = require('./lib/generate-jws')
const validateToken = require('./lib/validate-jws')

const payload = {
  name: 'Flying Spaghetti Monster',
  description: 'rAmen'
}

const token = generateToken({key: config.tokenKey, payload: payload})
console.log(token)

console.log(validateToken({key: config.tokenKey, jws: token}))

