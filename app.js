"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const port = 30001;
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });
app.use('/thumbnails', express.static('thumbnails'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
app.use(cors());
app.use(express.static('public'));
//app.use(express.bodyParser());
const catRoute = require("./routes/catRoute");
const userRoute = require("./routes/userRoute");

app.use("/cat", catRoute);
app.use("/user", userRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
