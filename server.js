const db = require("./db");
const express = require("express");
const app = express();
const port = 8080;

app.get("/", async (req, res) => {
  res.send("<h1>Hello Wolrd hello!!!!!</h1>");
});

app.get("/users", async (_, res) => {
  try {
    const users = await db.query(`SELECT * FROM users`);

    res.status(200).json({
      status: "success",
      results: users.rows.length,
      data: {
        users: users.rows,
      },
    });
  } catch (error) {
    res.status(400).json({ message: { error } });
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
