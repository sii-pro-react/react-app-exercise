# Simple Backend for Bank app

## install

`npm i`

## run

`npm start`

## endpoints

### get all

GET ```http://localhost:3005/api/applications```

### search by name

GET ```http://localhost:3005/api/applications?name_like=${value}```

### sort

GET ```http://localhost:3005/api/applications?_sort=name&_order=asc```

### pagination

GET ```http://localhost:3005/api/applications?_limit=3&_page=2```

### add new one

POST ```http://localhost:3005/api/applications```

with example data

```
{
  name: "example name",
  description: "example description",
  enabled: false,
}
```

### delete single

DELETE ```http://localhost:3005/api/applications/${deleteId}```