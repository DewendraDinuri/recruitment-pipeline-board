
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// In-memory candidate store
let candidates = [];
let idCounter = 1;

// Create candidate
app.post('/api/candidates', (req, res) => {
  const candidate = { id: idCounter++, ...req.body };
  candidates.push(candidate);
  res.status(201).json(candidate);
});

// Read all or filter by stage
app.get('/api/candidates', (req, res) => {
  const { stage } = req.query;
  const filtered = stage ? candidates.filter(c => c.stage === stage) : candidates;
  res.json(filtered);
});

// Read single candidate
app.get('/api/candidates/:id', (req, res) => {
  const candidate = candidates.find(c => c.id == req.params.id);
  candidate ? res.json(candidate) : res.status(404).json({ error: 'Not found' });
});

// Update candidate
app.put('/api/candidates/:id', (req, res) => {
  const index = candidates.findIndex(c => c.id == req.params.id);
  if (index !== -1) {
    candidates[index] = { ...candidates[index], ...req.body };
    res.json(candidates[index]);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

// Delete candidate
app.delete('/api/candidates/:id', (req, res) => {
  candidates = candidates.filter(c => c.id != req.params.id);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
