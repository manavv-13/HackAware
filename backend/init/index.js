const mongoose = require('mongoose');
const Simulation = require("../models/scenario.js");
const data = require("../init/data.js");

main().then(()=>{
    console.log("connection done!");
}).catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/dataBreachSimulation');
}

const inititaliseDb = async ()=>{
await Simulation.insertMany(data.data);
console.log("Inserted Succesfully");
}
inititaliseDb();