const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/currency-info/:currency', async (req, res) => {
  const { currency } = req.params;
  try {
    const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.3.2/v1/currencies/${currency}.json`);
    const data = await response.json();
    res.json(data[currency]);
  } catch (error) {
    console.error('Error fetching currency info:', error);
    res.status(500).json({ error: 'Failed to fetch currency info' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
