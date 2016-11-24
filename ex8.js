var express = require('express')
var fs = require('fs')
var app = express()

app.get('/books', function(req, res){
        fs.readFile(process.argv[3], function(err, data){
                if(err) return res.sendStatus(500)
                try{                
                    obj = JSON.parse(data)
                } catch {
                    res.sendStatus(500)
                }
                res.json(obj)
          })
        })
app.listen(process.argv[2])
