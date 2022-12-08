let data;
let applications;

// POST new one

data = await fetch("http://localhost:3005/api/applications", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "test from json-server",
    description: "hello world",
    enabled: false,
  }),
});

applications = await data.json();

console.log(JSON.stringify(applications, null, 2));

// GET ALL

data = await fetch("http://localhost:3005/api/applications", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

applications = await data.json();

console.log(JSON.stringify(applications, null, 2));

// SEARCH

const value = "enity";

data = await fetch(`http://localhost:3005/api/applications?name_like=${value}`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

applications = await data.json();

console.log(JSON.stringify(applications, null, 2));

// DELETE

const deleteId = "kqIn5Vj";

data = await fetch(`http://localhost:3005/api/applications/${deleteId}`, {
  method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

applications = await data.json();

console.log(JSON.stringify(applications, null, 2));

// SORT

data = await fetch("http://localhost:3005/api/applications?_sort=name&_order=asc", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

applications = await data.json();

console.log(JSON.stringify(applications, null, 2));

// PAGINATION

data = await fetch("http://localhost:3005/api/applications?_limit=3&_page=2", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

applications = await data.json();

console.log(JSON.stringify(applications, null, 2));
