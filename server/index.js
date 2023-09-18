require('dotenv').config();
require('./config/dbConnect');
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8000;
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/api/tasks', require('./routes/cruderoutes'));

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})