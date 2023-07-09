# Contact API Spec
## Create Contact API
- Endpoint: /api/contacts
- Method: POST
- Headers:
  - Authorization: token
- RequestBody:
```json
{
  "first_name" : "first_name-dummy",
  "last_name" : "last_name-dummy",
  "email" : "email@dummy.com",
  "phone" : "12345678"
}
```
- ResponseBody:SUCCESS
```json
{
  "data": {
    "id" : 1,
    "first_name" : "first_name-dummy",
    "last_name" : "last_name-dummy",
    "email" : "email@dummy.com",
    "phone" : "12345678"
  },
  error: false,
  message: "Contact is created."
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Email is not valid format"
}
```

## Update Contact API
- Endpoint: /api/contacts/:id
- Method: PUT
- Headers:
  - Authorization: token
- RequestBody:
```json
{
  "first_name" : "first_name-dummy",
  "last_name" : "last_name-dummy",
  "email" : "email@dummy.com",
  "phone" : "12345678"
}
```
- ResponseBody:SUCCESS
```json
{
  "data": {
    "id" : 1,
    "first_name" : "first_name-dummy",
    "last_name" : "last_name-dummy",
    "email" : "email@dummy.com",
    "phone" : "12345678"
  },
  error: false,
  message: "Contact updated"
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Email is not valid format"
}
```

## Get Contact API
- Endpoint: /api/contacts/:id
- Method: GET
- Headers:
  - Authorization: token
- RequestBody:
```json
```
- ResponseBody:SUCCESS
```json
{
  "data": {
    "id" : 1,
    "first_name" : "first_name-dummy",
    "last_name" : "last_name-dummy",
    "email" : "email@dummy.com",
    "phone" : "12345678"
  },
  error: false,
  message: ""
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Contact is not found"
}
```

## Remove Contact API
- Endpoint: /api/contacts/:id
- Method: DELETE
- Headers:
  - Authorization: token
- RequestBody:
```json
```
- ResponseBody:SUCCESS
```json
{
  "data": null,
  error: false,
  message: "Contact deleted."
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Contact is not found"
}
```

## Search Contact API
- Endpoint: /api/contacts
- Method: GET
- Headers:
  - Authorization: token
- QueryParams:
  - name : Search by first_name or last_name, using like, optional
  - email : Search by email using like, optional
  - phone : Search by phone using like, optional
  - page : number of page, default 1
  - size : size per page, default 10
- RequestBody:
```json
```
- ResponseBody:SUCCESS
```json
{
  "data" : [
    {
      "id" : 1,
      "first_name" : "first_name-dummy",
      "last_name" : "last_name-dummy",
      "email" : "email@dummy.com",
      "phone" : "12345678"
    }
  ],
  "paging" : {
    "page" : 1,
    "total_page" : 3,
    "total_item" : 30
  },
  error: false,
  message: ""
}
```
- ResponseBody:FAILED
```json
```