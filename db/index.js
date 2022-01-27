const { Pool } = require("pg");

const pool = new Pool({
  password: "passwordinoc",
  user: "postgres",
  host: "postgres",
  database: "alexx",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
