'use strict'

module.exports = pathname => {
  const method = pathname.replace('/', '')
  const methods = new Set([
    'createTicket',
    'getTicketCategories',
    'getEquipment',
    'createEquipmentOrder',
    'getPrograms',
    'getActiveTickets'
  ])
  if (!methods.has(method)) {
    throw Error(`${method}: Not a valid method`)
  } else {
    return method
  }
}
