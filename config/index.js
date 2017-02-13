'use strict'

module.exports = {
  url: process.env.CS_URL || 'http://portalcode.t-fk.no/scripts/customer.exe?_sf=0&action=safeParse&includeId=ticket-endpoint',
  key: process.env.CS_KEY || 'asecretpassword',
  tokenKey: process.env.TOKEN_KEY || 'Gibberish, jibberish, jibber-jabber and gobbledygook'
}
