const express = require('express');
const app = express();

const indexRoute = require('./routes/indexRoute');
const paramsRoute = require('./routes/paramsRouter');


app.use('/', indexRoute);
app.use('/client', paramsRoute);

app.listen(3333, () => console.log('Server running and port 3333'));