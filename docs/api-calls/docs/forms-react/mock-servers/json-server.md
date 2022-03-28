# What is json-server

It is a node package that helps you create a dummy-local REST API with json-server.
This allows you to use a fake-api with fake-data to mock an api call

**Advantages**

- Saves you making a real-database
- Real server
- Real REST API routes

Instead you create fake data in a `db.json` file in the root directory.

- install the package in your project `npm install json-server`
- watch the files by spinning up a back-end server
  `npx json-server --watch db.json --port 5000`

Each object you create becomes a resource and works similarly to an API end-point: In this repo the resources in `db.json` are:-
[http://localhost:5000/payroll]
[http://localhost:5000/comments]
[http://localhost:5000/shortStories]
