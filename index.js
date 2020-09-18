const express = require('express')
const app = express()
const cors = require('cors');
const morgan = require('morgan');

const userModels = require('./models/UserModel');

const PORT = 5000 || process.env.PORT
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.json(info))

app.listen(PORT, () => console.log(`Server live on ${PORT}`))

