require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV, DB_URL, DEV_DB_URL, TEST_DB_URL,
} = process.env;

let dburl = '';

switch (NODE_ENV) {
  case 'production':
    dburl = DB_URL;
    break;
  case 'development':
    dburl = DEV_DB_URL;
    break;
  case 'test':
    dburl = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database is founded !');
}

console.log(dburl);

const options = {
  connectionString: dburl,
  ssl: true,
};

module.exports = new Pool(options);
