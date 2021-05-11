import express from "express";
import path from "path";

const app = express();

app.use("/static", express.static(path.resolve("static")));
app.use("/", express.static(path.resolve("")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(
  process.env.PORT || 3000,
  console.log(`Server started on PORT ${process.env.PORT || 3000}`)
);
