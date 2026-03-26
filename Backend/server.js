const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const complaintRoutes = require('./routes/complaints');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/complaints', complaintRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});