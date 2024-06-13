const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4034;
const { connectDb } = require("./db/dbConnection.js");

// middlewares
app.use(cors());
app.use(express.static(`${__dirname}/upload`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Stock It API home route is working!");
});



// this route should be last for handling undefined routes
app.all("/*", (req, res) => {
  res.send("Please check the route");
});

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });
});
