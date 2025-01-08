const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const choiceSchema = new Schema({
  decision: String,
  outcome: String,
  isCorrect: Boolean,  // Marks if this choice is the correct or preferred decision
  nextStep: Number     // Indicates the next step in the sequence
});

const stepSchema = new Schema({
  stepNumber: Number,
  description: String,
  choices: [choiceSchema]
});

const simulationSchema = new Schema({
  name: String,
  description: String,
  impact: String,
  preventiveMeasures: String,
  steps: [stepSchema]  // Array of steps with choices
});
  
 const Simulation = mongoose.model('Simulation', simulationSchema);
 module.exports = Simulation;