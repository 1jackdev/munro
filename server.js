const express = require("express");
const cors = require("cors");
const router = require("./routes/router.js");
const PORT = +process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
