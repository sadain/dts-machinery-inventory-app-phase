const express = require('express');
const app = express();
var data = require('./datasource/Demo.json');
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


// all record
app.post('/api/Country', function (req, res){
    return res.json({result: data, count: data.lenght});
});

// insert
app.post('/api/Country/insert', function (req, res){
    data.splice(0,0,req.body.value);
    return res.status(200).send('Row Inserted')
});

// remove
app.post('/api/Country/delete', function (req, res){
    data = data.filter(x => x.id !== req.body.key);
    return res.status(200).send('Row Deleted');
});

// update
app.post('/api/Country/update', function (req, res){
    var index = data.findIndex(x => x.id == res.body.value.OrderID);
    data.splice(index, 1, req.body.value);
    return res.status(200).send('Row Updated');
});

app.listen(8080);