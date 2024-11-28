import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({ message: "welcome to readme server" });
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
