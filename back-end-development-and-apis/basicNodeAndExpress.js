let express = require('express');
let bodyParser = require('body-parser');
let app = express();

console.log("Hello World");

app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  const messageStyle = process.env['MESSAGE_STYLE'];
  let response = "Hello json";

  if (messageStyle === 'uppercase') {
    response = response.toUpperCase(); 
  }
  res.json({"message": response});
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({time: req.time});
});

app.get('/:word/echo', (req, res) => {
  res.json({echo: req.params.word});
});

app.get('/name', (req, res) => {
  res.json({name: `${req.query.first} ${req.query.last}`});
});

app.post('/name', (req, res) => {
  res.json({name: `${req.body.first} ${req.body.last}`});
});