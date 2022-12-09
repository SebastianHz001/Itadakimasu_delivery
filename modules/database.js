//import mongoose from 'mongoose';
var mongoose = require('mongoose');

var servidor = "localhost:27017";
var nombreBaseDatos ="Itadakimasu";

mongoose.set('strictQuery', true);

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${servidor}/${nombreBaseDatos}`)
        .then(()=>{
            console.log("Se conecto a la base de datos");
        })
        .catch(error=>{
            console.error(JSON.stringify(error));   
        });
    }
}


module.exports = new Database();
