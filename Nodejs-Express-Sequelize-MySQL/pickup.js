var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
 // origin: ['http://192.168.10.153:4200', 'http://localhost'],
  origin: ['http://localhost:4200', 'http://localhost'],
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

//const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
//db.sequelize.sync({force: true}).then(() => {
//  console.log('Drop and Resync with { force: true }');
//  initial();
//});

require('./app/route/kids.route.js')(app);
 
// Create a Server
var server = app.listen(8088, function () {
 
  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})


