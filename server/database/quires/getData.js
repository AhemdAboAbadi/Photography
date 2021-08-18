const connection = require('../db_connection');

const getDataQuery = () => connection.query('SELECT cus_name, email, phone, city, country, purpose FROM customers');

module.exports = getDataQuery;
