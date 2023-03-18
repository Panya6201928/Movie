const movieRouter = require('./movie')
const express = require('express')
const { res } = require('express')
const morgan = require('morgan');
const app = express()
const port = 3000

app.use(express.static('week6/public'));
app.use(morgan("common",{immediate:true}));

app.use('/movie',movieRouter);

app.get('/', (req, res) => res.redirect('/movie'))

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))