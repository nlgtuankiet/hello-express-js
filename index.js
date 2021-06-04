const express = require('express');
const app = express();
const port = 4000

app.get('/', function (req, res) {
  res.send({
    'message': 'hello world!',
  })
})

app.listen(port, () => {
  console.log(`listening at port:${port}`)
})