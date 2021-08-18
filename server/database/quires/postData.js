const connection = require('../db_connection');

const postDataQuery = (data) =>
  connection.query(
    'INSERT INTO customers (cus_name, email, phone, city, country, purpose) VALUES ($1 ,$2 ,$3 ,$4 ,$5 ,$6);',
    data
  );

module.exports = postDataQuery;
