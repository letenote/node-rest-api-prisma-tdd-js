# User API Spec

## Register User API
- Endpoint: /api/users
- Method: POST
- RequestBody:
```json
{
  "username": "username-dummy",
  "password": "password-dummy",
  "name": "name-dummy"
}
```
- ResponseBody:SUCCESS
```json
{
  "data": {
    "username": "username-dummy",
    "name": "name-dummy"
  },
  error: false,
  message: "User created."
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Username already registered."
}
```

## Login User API
- Endpoint: /api/users/login
- Method: POST
- RequestBody:
```json
{
  "username": "username-dummy",
  "password": "password-dummy"
}
```
- ResponseBody:SUCCESS
```json
{
  "data": {
    "token": "unique-token"
  },
  error: false,
  message: "User success login."
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Wrong username or password."
}
```

## Update User API
- Endpoint: /api/users/current
- Method: PATCH
- Headers:
  - Authorization: token
- RequestBody:
```json
{
  "username": "username-dummy", // => optional
  "password": "password-dummy", // => optional
  "name": "name-dummy", // => optional
}
```
- ResponseBody:SUCCESS
```json
{
  "data": {
    "username": "username-dummy",
    "name": "name-dummy"
  },
  error: false,
  message: "User updated."
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Username max length is 25"
}
```

## Get User API
- Endpoint: /api/users/current
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
    "username": "username-dummy",
    "name": "name-dummy"
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
  message: "Unauthorized"
}
```

## Logout User API
- Endpoint: /api/users/logout
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
  message: "User is logout"
}
```
- ResponseBody:FAILED
```json
{
  "data": null,
  error: true,
  message: "Unauthorized"
}
```