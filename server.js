const node_environment = process.env.NODE_ENV || 'development'
if(node_environment === "development") {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes')

const db = require('./db/config')
mongoose.connect(db.uri, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('connected to DB!'));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/v1', routes)

const PORT = process.env.PORT? Number(process.env.PORT) : 3333;

app.listen(PORT, () => { console.log(`ヽ(^o^)丿 Server Running on http://localhost:${PORT}`) });