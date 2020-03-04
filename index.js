const express = require("express"),
  app = express(),
  PORT = process.env.port || 5000,
  persons = [{name: 'John'}, {name: 'Doe'}, {name: 'Michael'}]

app.get('/api/persons', (req, res) => res.send(persons))

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})
