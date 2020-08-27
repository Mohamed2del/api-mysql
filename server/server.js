const express = require("express");
const routes = require('./routes');
const apiRouter = require("./routes");

const app = express();


app.use(express.json())

app.use('/api/chrips', apiRouter )
app.listen(process.env.PORT || "3000",() =>{
    console.log(`Server is running on port : ${process.env.PORT || '3000'}`)
});