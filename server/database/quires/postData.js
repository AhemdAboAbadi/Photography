const connection = require('../db_connection');

const postDataQuery = (data) => {
  const dataArray = [data.name, data.email, data.phone, data.city, data.country, data.purpose];
  return connection.query(
    'INSERT INTO customers (cus_name, email, phone, city, country, purpose) VALUES ($1 ,$2 ,$3 ,$4 ,$5 ,$6);',
    dataArray,
  );
};

module.exports = postDataQuery;
