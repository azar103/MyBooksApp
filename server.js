const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const bookRouter = require("./routers/book");
const userRouter = require("./routers/auth");
app.use(express.json());
connectDB();

const port = "5000" || process.env.NODE_ENV;

app.use("/api/books", bookRouter);
app.use("/api/auth", userRouter);
//listen to port
app.listen(port, () => {
  console.log(`Connection on port ${port}...`);
});
