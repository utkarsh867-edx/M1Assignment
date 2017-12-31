const csv2json = require('csvtojson');
const http = require('http');
const fs = require('fs');
const path = require('path');
const csvFile = path.join(__dirname,'customer-data.csv');

arr = [];
csv2json()
    .fromFile(csvFile)
    .on('json', (jsonObj)=>{
        arr.push(jsonObj);
    })
    .on('done',(error)=>{
        fs.writeFile(path.join(__dirname, 'customer-data.json'),JSON.stringify(arr,null,2),(error)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log("Creating JSON file...");
            }
        });
        if(error){
            console.log(error);
        }
    });