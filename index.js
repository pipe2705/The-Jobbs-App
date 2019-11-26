let express = require("express");

let app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  response.send("To see the job listing visit /api/jobs");
});
