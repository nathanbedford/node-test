const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.send(
    "Hello World! This works well. I'll look into caching later. Maybe a custom build image?"
  )
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
