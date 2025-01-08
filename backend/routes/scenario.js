const express = require('express');
const router = express.Router();
const Simulation = require('../models/scenario');

router.get('/', async (req, res) => {
  const simulations = await Simulation.find({});
  res.render('simulations/index', { simulations });
});

router.get('/:id', async (req, res) => {
  const simulation = await Simulation.findById(req.params.id);
  res.render('simulations/show', { simulation, outcome: null });
});
// Route to start the simulation
router.get('/:id/start', async (req, res) => {
  const simulation = await Simulation.findById(req.params.id);
  req.session.userChoices = []; // Reset choices at the start of a new simulation
  res.redirect(`/simulations/${simulation._id}/step/1`);
});

// Route to show each step of the simulation
router.get('/:id/step/:stepNumber', async (req, res) => {
  const simulation = await Simulation.findById(req.params.id);
  const step = simulation.steps.find(s => s.stepNumber === parseInt(req.params.stepNumber));
  
  // If no more steps, redirect to the result page
  if (!step) {
    return res.redirect(`/simulations/${simulation._id}/result`);
  }

  res.render('simulations/step', { simulation, step });
});

// Route to handle user choice at each step
router.post('/:id/step/:stepNumber', async (req, res) => {
  const { id, stepNumber } = req.params;
  const simulation = await Simulation.findById(id);
  const step = simulation.steps.find(s => s.stepNumber === parseInt(stepNumber));

  const userDecision = req.body.decision;
  const chosenOutcome = step.choices.find(choice => choice.decision === userDecision);

  // Save the user's choice and outcome in the session
  req.session.userChoices.push({
    stepNumber: step.stepNumber,
    decision: userDecision,
    outcome: chosenOutcome.outcome,
    isCorrect: chosenOutcome.isCorrect,
    preventiveMeasures: simulation.preventiveMeasures
  });

  // Redirect to the next step or result if no further steps
  if (chosenOutcome.nextStep) {
    res.redirect(`/simulations/${id}/step/${chosenOutcome.nextStep}`);
  } else {
    res.redirect(`/simulations/${id}/result`);
  }
});

// Route to display the final result
router.get('/:id/result', (req, res) => {
  const userChoices = req.session.userChoices;
  res.render('simulations/result', { userChoices });
});

module.exports = router;
