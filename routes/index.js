const express = require("express");
const bookRouter = require("./book");
const path = require("path");
const authRoutes = require("./auth");
const router = express.Router();
router.use("/book", bookRouter);
router.use("/auth", authRoutes);
// 路由前缀： router.use('/book',bookRouter)，boo文件里面的所有路由都带上/book前缀
router.get("/", (req, res) => {
  console.log(path.join(__dirname, "/../pages/home.html"));
  console.log(path.resolve("./pages/home.html"));
  // res.sendFile(path.resolve("./pages/home.html"));
  res.render("index", { name: "sanbing" });
});

router.all("/*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = router;
