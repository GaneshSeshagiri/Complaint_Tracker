const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',
  database: 'complaint_tracker',
  password: 'ganesh', 
  port: 5432
});

module.exports = pool;