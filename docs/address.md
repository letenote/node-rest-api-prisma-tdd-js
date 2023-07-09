## Address API Spec
# Create Address API
- Endpoint: /api/contacts/:contactId/addresses
- Method: POST
- Headers:
  - Authorization: token
- RequestBody:
```json
{
  "street" : "street-dummy",
  "city" : "city-dummy",
  "province" : "province-dummy",
  "country" : "counntry-dummy",
  "postal_code" : "postal_code-dummy"
}
```
- ResponseBody:SUCCESS
```json
{
  "data": {
    "id": 1,
    "street" : "street-dummy",
    "city" : "city-dummy",
    "province" : "province-dummy",
    "country" : "counntry-dummy",
    "postal_code" : "postal_code-dummy"
  },
  error: false,
  message: "Address creaated."
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Country is required"
}
```

# Update Address API
- Endpoint: /api/contacts/:contactId/addresses/:addressId
- Method: PUT
- Headers:
  - Authorization: token
- RequestBody:
```json
{
  "street" : "street-dummy",
  "city" : "city-dummy",
  "province" : "province-dummy",
  "country" : "counntry-dummy",
  "postal_code" : "postal_code-dummy"
}
```
- ResponseBody:SUCCESS
```json
{
  "data": {
    "id": 1,
    "street" : "street-dummy",
    "city" : "city-dummy",
    "province" : "province-dummy",
    "country" : "counntry-dummy",
    "postal_code" : "postal_code-dummy"
  },
  error: false,
  message: "Address updated."
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Country is required"
}
```

# Get Address API
- Endpoint: /api/contacts/:contactId/addresses/:addressId
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
    "id": 1,
    "street" : "street-dummy",
    "city" : "city-dummy",
    "province" : "province-dummy",
    "country" : "counntry-dummy",
    "postal_code" : "postal_code-dummy"
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
  message: "address is not found"
}
```

# Remove Address API
- Endpoint: /api/contacts/:contactId/addresses/:addressId
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
  message: "adresses deleted"
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "address is not found"
}
```

# List Address API
- Endpoint: /api/contacts/:contactId/addresses
- Method: GET
- Headers:
  - Authorization: token
- RequestBody:
```json
```
- ResponseBody:SUCCESS
```json
{
  "data": [
    {
      "id" : 1,
      "street" : "street-dummy",
      "city" : "city-dummy",
      "province" : "province-dummy",
      "country" : "counntry-dummy",
      "postal_code" : "postal_code-dummy"
    },
    {
      "id" : 2,
      "street" : "street-dummy",
      "city" : "city-dummy",
      "province" : "province-dummy",
      "country" : "counntry-dummy",
      "postal_code" : "postal_code-dummy"
    }
  ],
  error: false,
  message: "get list adresses success"
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "address is not found"
}
```