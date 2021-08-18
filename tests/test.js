const dbBuild = require("../server/database/db_build");
const connection = require("../server/database/db_connection");
const getDataQuery = require("../server/database/quires/getData");

beforeAll(() => {
  return dbBuild();
});

test("check get data function", () => {
  getDataQuery().then((data) => {
    expect(data.rows.rowCount).toBe(2);
  });
});

afterAll(() => {
  return connection.end();
});
