require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const app = express();

const { PORT = 3000, NODE_ENV = "development" } = process.env;

const cors = require("cors");
const corsOptions = require("./config/cors");

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());

// app.use(cors());

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "Hello World" });
});

const stickyRouter = require("./controllers/sticky");
app.use("/sticky", stickyRouter);

// const personRouter = require("./controllers/person");
// app.use("/person", personRouter);

app.listen(PORT, () => {
  console.log(`listening in on port: ${PORT}`);
});
