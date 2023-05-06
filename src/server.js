const express = require("express");
const dotenv = require("dotenv/config");
const cors = require("cors");
const connectDB = require("./db/index.js");
const errorHandler = require("./middleware/errorHandler/index.js");
const reviewRouter = require("./routes/reviews/index.js");

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(errorHandler);
app.use(cors());
app.use(express.json());

// routes
app.use("/reviews", reviewRouter);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}...`);
});
