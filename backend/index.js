// server

const express = require('express');
const dbconnection = require('./config/db');
const routes = require('./routes/employees');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true, credentials: true }));

//DB connection
dbconnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send('Hello, World!'));
app.use("/api/employees", routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 