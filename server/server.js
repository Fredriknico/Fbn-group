/* eslint-disable no-undef */
const express = require('express');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 5000;

// BodyParser middleware , FUNKSJON SOM GJØRES VED HVER REQUEST
app.use(express.json());

app.use('/', routes);

app.use('/uploads', express.static('uploads'));

// LISTEN

app.listen(port, () => console.log(`Server started on port ${port}`));
