const express = require('express');
const app = express();
const port = 3333;
let cors = require("cors");
app.use(cors());
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});