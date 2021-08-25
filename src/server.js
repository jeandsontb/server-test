const express = require('express');
const path = require('path');
const app = express();

const indexRoute = require('./routes/indexRoute');
const paramsRoute = require('./routes/paramsRouter');

app.use('/', indexRoute);
app.use('/client', paramsRoute);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3333, () => console.log('Server running and port 3333'));