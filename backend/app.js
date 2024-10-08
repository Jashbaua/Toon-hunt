const express = require('express')
const cors = require('cors');
const dotenv=require('dotenv')

const rootRouter=require('./routers/rootRouter')

const app = express()
dotenv.config()
app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', rootRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));