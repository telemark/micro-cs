# micro-cs

....

## createTicket

API kall man kan poste inn som raw body i Postman eller i nettleser:

### Request

```POST /createTicket```

```json
{
  "categoryId": 10, - Sakens kategori blir satt via id. Disse finnes i CRM7.EJ_CATEGORY I SuperOffice databasen.
  "title": "Ny bestilling", - Tittel på sak.
  "message": "Dette er en bestilling.", - Sakens melding.
  "image": "R0lGODlhPQBEAPeoAJosM..." - Vedlegget som Base64 String.
}
```

### Response

```json
{}
```

## getTicketCategories

Henter alle sakskategorier som finnes i SuperOffice-databasen. (CRM7.EJ_CATEGORY)

### Request

```GET /getTicketCategories```

### Response

```json
{
  "id": 1,
  "name": "Support"
},
{
  "id": 2,
  "name": "Administration"
},
{
  "id": 3,
  "name": "Sale"
}
```

## getEquipment

Henter ut alle felter fra tabellen ```y_mobile```

### Request
```GET /getEquipment```

### Response

```json
 {
  "id": 10,
  "type": "Klientutstyr",
  "name": "Some text",
  "expired": "Some text",
  "extraEquipment": "Some text"
}
```

## createOrder

### Request

```POST /createOrder```

### Response

```json
{}
```

## createEquipmentOrder

### Request
```POST /createEquipmentOrder```

### Response

```json
{
  "type": "Klientutstyr",
  "name": "Some text",
  "expired": "Some text",
  "extraEquipment": "Some text"
}
```

## getPrograms

### Request

```
GET /getPrograms
```

### Response

```json
{
  "name": "Budsjett",
  "groupname": "Visma Enterprise - Økonomi"
}
```

## getActiveTickets

### Request

```GET /getActiveTickets```

```json
{
  "csMethod": "getActiveTickets",
  "username": "username"
}
```

### Response

```json
{
  "id": 10,
  "title": "Ny bestilling",
  "ownedBy": "Ola Nordmann",
  "status": "Open",
  "createdAt": "2016-10-18 09:54:13",
  "author": "ON",
  "lastChanged": "2016-10-25 11:04:34"
},
 {
  "id": 10,
  "title": "Ny pc",
  "ownedBy": "Ola Nordmann",
  "status": "Open",
  "createdAt": "2016-10-18 09:54:13",
  "author": "ON",
  "lastChanged": "2016-10-25 11:04:34"
}
```

# License

[MIT](LICENSE)
