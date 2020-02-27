let fs = require('fs');
let express = require("express");
var MongoClient = require('mongodb').MongoClient;

let llamada = express();

var tabla = "<br/><br/><table class='table'><thead><tr><th>Nombre</th><th>Especie</th></tr>";

llamada.listen(8080, '127.0.0.1', function() {
    console.log('Servidor ejecutándose en http://127.0.0.1:8080');
});

llamada.use('/1', function(req, res) {
    MongoClient.connect("mongodb://localhost:27017/harrypotter", { useUnifiedTopology: true }, function(err, db) {
        var baseDatos = db.db('harrypotter');
        //noinspection JSDeprecatedSymbols
        if (err) {
            throw err;
        }
        baseDatos.collection('hogwarts').find({ "species": "human" }).toArray(function(err, result) {
            if (err) {
                throw err;
            }

            for (var i = 0; i < result.length; i++) {
                tabla += "<tr><td>" + result[i].name + "</td><td>" + result[i].species + "</td></tr>"
            }
            tabla += "</thead></table>"
            res.send(tabla);
            tabla = "";
            tabla = "<br/><br/><table class='table'><thead><tr><th>Nombre</th><th>Especie</th></tr>"
            db.close();
        })
    })
})

llamada.use('/2', function(req, res) {
    MongoClient.connect("mongodb://localhost:27017/harrypotter", { useUnifiedTopology: true }, function(err, db) {
        var baseDatos = db.db('harrypotter');
        //noinspection JSDeprecatedSymbols
        if (err) {
            throw err;
        }
        baseDatos.collection('hogwarts').find({ yearOfBirth: { $lt: 1979 } }).toArray(function(err, result) {
            if (err) {
                throw err;
            }

            for (var i = 0; i < result.length; i++) {
                tabla += "<tr><td>" + result[i].name + "</td><td>" + result[i].species + "</td></tr>"
            }
            tabla += "</thead></table>"
            res.send(tabla);
            tabla = "";
            tabla = "<br/><br/><table class='table'><thead><tr><th>Nombre</th><th>Especie</th></tr>"
            db.close();
        })
    })
})

llamada.use('/3', function(req, res) {
    MongoClient.connect("mongodb://localhost:27017/harrypotter", { useUnifiedTopology: true }, function(err, db) {
        var baseDatos = db.db('harrypotter');
        //noinspection JSDeprecatedSymbols
        if (err) {
            throw err;
        }
        baseDatos.collection('hogwarts').find({ "wand.wood": { $eq: "holly" } }).toArray(function(err, result) {
            if (err) {
                throw err;
            }

            for (var i = 0; i < result.length; i++) {
                tabla += "<tr><td>" + result[i].name + "</td><td>" + result[i].species + "</td></tr>"
            }
            tabla += "</thead></table>"
            res.send(tabla);
            tabla = "";
            tabla = "<br/><br/><table class='table'><thead><tr><th>Nombre</th><th>Especie</th></tr>"
            db.close();
        })
    })
})


llamada.use('/4', function(req, res) {
    MongoClient.connect("mongodb://localhost:27017/harrypotter", { useUnifiedTopology: true }, function(err, db) {
        var baseDatos = db.db('harrypotter');
        //noinspection JSDeprecatedSymbols
        if (err) {
            throw err;
        }
        baseDatos.collection('hogwarts').find({ "alive": true, "hogwartsStudent": true }).toArray(function(err, result) {
            if (err) {
                throw err;
            }

            for (var i = 0; i < result.length; i++) {
                tabla += "<tr><td>" + result[i].name + "</td><td>" + result[i].species + "</td></tr>"
            }
            tabla += "</thead></table>"
            res.send(tabla);
            tabla = "";
            tabla = "<br/><br/><table class='table'><thead><tr><th>Nombre</th><th>Especie</th></tr>"
            db.close();
        })
    })
})