const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Create complaint
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    await pool.query(
      'INSERT INTO complaints (title, description) VALUES ($1, $2)',
      [title, description]
    );
    res.json({ message: 'Complaint added successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding complaint');
  }
});

// Get all complaints
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM complaints');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching complaints');
  }
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO complaints (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    console.log('Inserted row:', result.rows[0]);  // log inserted row
    res.json({ message: 'Complaint added successfully!', complaint: result.rows[0] });
  } catch (err) {
    console.error('Insert error:', err);
    res.status(500).send('Error adding complaint');
  }
});

module.exports = router;