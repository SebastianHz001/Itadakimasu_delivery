//import mongoose from 'mongoose';
var mongoose = require('mongoose');

const port = "27017";
const host = "localhost"
const db = "Itadakimasu";

mongoose.set('strictQuery', true);

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${db}`)
        .then(()=>{
            console.log("Se conecto a la base de datos");
        })
        .catch(error=>{
            console.error(JSON.stringify(error));   
        });
    }
}


module.exports = new Database();
