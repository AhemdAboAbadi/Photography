const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./db_connection');

const dbBuild = () => {
  const sql = readFileSync(join(__dirname, './db_build.sql')).toString();

  connection
    .query(sql)
    .then(() => console.log('build created successfully!'))
    .catch((e) => console.error('failed to build', e.stack));
};

dbBuild();

module.exports = dbBuild;
