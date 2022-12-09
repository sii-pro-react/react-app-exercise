<!-- .slide: data-background="#330000" -->
# json-server


<!-- .slide: data-background="#330000" -->
## what is json-server

This is an backend api library to work with, when we need some mocked data, and there is no possibility for backend or not everything is easy to test when backend is working (for example database issues)


<!-- .slide: data-background="#330000" -->
## installation

json-server can be installed in frontend project itself or standalone. We decided to install it as separate 'application' in different folder

```bash
npm i json-server
```


<!-- .slide: data-background="#330000" -->
## start

To start json-server it is enough to create database file like _db.json_ with data as array in specific key. Here database has only one key wherefrom we will get data

```json[2,9|3-8]
{
  "applications": [
    {
      "id": "generated_id",
      "name": "app name",
      "description": "app description",
      "active": false
    }
  ]
}
```


<!-- .slide: data-background="#330000" -->
and start server

```bash
$ json-server db.json
```

this will run by default on 

```bash
GET 
```


<!-- .slide: data-background="#330000" -->
## get data from api

getting data from api is as easy as:

```bash[1|2]
GET /:key-what-you-wont-to-get
GET /applications
```

return will be an array of elements


<!-- .slide: data-background="#330000" -->
## get single element from api

```bash[1|2]
GET /:key-what-you-wont-to-get/:id
GET /applications/He110-W0rD
```


<!-- .slide: data-background="#330000" -->
## pagination

```bash[1|2]
_limit=:value
_page=:value
```

```bash[1|2]
GET /:key-what-you-wont-to-get?_limit_=:value&_page=:value
GET /applications?_limit_=3&_page=3
```


<!-- .slide: data-background="#330000" -->
## order

```bash[1|2]
_sort=:keyName
_order=:asc|desc
```

```bash[1|2]
GET /:key-what-you-wont-to-get?_sort=:keyName&_order=asc|desc
GET /applications?_sort=name&_order=asc
```


<!-- .slide: data-background="#330000" -->
## add new one

```bash[1|2]
POST /:key-what-you-wont-to-post-data
POST /applications
```

and json data

```json[2|3]
{
  "id": "S0mE-Id", // optional
  "name": "new name"
}
```

response from request will be new element with "id" if "id" is not provided it will be created by json-server


<!-- .slide: data-background="#330000" -->
## update one

```bash[1|2]
PUT /:key-what-you-wont-to-post-data/:id
PUT /applications/He110-W0rD
```

and json data - only keys that needed to be update

```json
{
  "name": "updated name"
}
```

response from request will be updated element


<!-- .slide: data-background="#330000" -->
## delete one

```bash[1|2]
DELETE /:key-what-you-wont-to-post-data/:id
DELETE /applications/He110-W0rD
```

response from request will be empty element


<!-- .slide: data-background="#330000" -->
## routes

to customize routes we need to create _routes.json_ file
this one will create _/api_ prefix for all routes

```json
{
  "/api/*": "/$1"
}
```

and add parameter to starting script

```bash
--routes routes.json
```


<!-- .slide: data-background="#330000" -->
## more routes options

if backend has route for search like this: `/api/applications/search/:phrase`

it is enough just to use this piece of code:

```json[3]
{
  "/api/*": "/$1",
  "/applications/search/:name": "/applications?name_like=:name"
}
```

and we can use as many parameters as we need


<!-- .slide: data-background="#330000" -->
## middleware

some additional functions like mocking delay, checking if token exists we can do by creating some middleware methods. to do so we just need to create some middleware file with method:

```js[1,5|2,4|3]
module.exports = (req, res, next) => {
  setTimeout(() => {
    next()
  }, 2000)
}
```

and apply it in starting script

```bash
--middlewares ./middlewares/delay.js
```

we can use more middleware files


<!-- .slide: data-background="#330000" -->
## other params

in this project we are using also some additional parameters

```bash[1|2]
--watch
--port 3005
```

to see full list just type

```bash
json-serve --help
```


<!-- .slide: data-background="#330000" -->
## questions

?
