const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from frontend during development
app.use(cors({ origin: "http://localhost:5174", credentials: true }));
app.use(express.json());

// --- Contact Form Endpoint ---
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields required." });
  }
  // Append to a JSON file for demo; in real life use a database or email service.
  const entry = { name, email, message, time: new Date().toISOString() };
  const saveFile = './contact_messages.json';
  let data = [];
  if (fs.existsSync(saveFile)) {
    data = JSON.parse(fs.readFileSync(saveFile));
  }
  data.push(entry);
  fs.writeFileSync(saveFile, JSON.stringify(data, null, 2));
  console.log("[Contact received]", entry);
  res.json({ success: true });
});

// --- Simulated Disease Prediction API ---
app.post('/api/predict', (req, res) => {
  const { symptoms = "", age = "", gender = "" } = req.body;
  // Simple demo logic; replace with your ML model for real use.
  let disease = "Viral Fever";
  if (/cough|cold/i.test(symptoms)) disease = "Common Cold";
  if (/headache|migraine/i.test(symptoms)) disease = "Migraine";
  let medicines = ["Paracetamol", "Vitamin C"];
  if (/migraine/i.test(symptoms)) medicines = ["Sumatriptan", "Painkillers"];
  let doctor = /migraine/i.test(symptoms) ? "Neurologist" : "General Physician";
  res.json({
    disease,
    medicines,
    doctor,
    caution: "This is not a diagnosis — always consult a medical professional."
  });
});

// --- Basic health endpoint for testing ---
app.get('/api/health', (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});