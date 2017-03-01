
'use strict'

module.exports = {
  url: process.env.CS_URL || 'http://portalcode.t-fk.no/scripts/customer.exe?_sf=0&action=safeParse&includeId=ticket-endpoint',
  key: process.env.CS_KEY || 'asecretkey',
  tokenKey: process.env.TOKEN_KEY || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go'
}
