const LAYOUT_SERVER = process.env.LAYOUT_SERVER || "localhost:8080";
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.cookie("auth", `@${req.body.username}`);
  // NEEDED, when deploying with nginx: res.cookie("auth", "yup", {domain: "localhost.de"});
  res.status(301).redirect("http://" + LAYOUT_SERVER + "/index");
});
router.get('/', (req, res) => {
  res.render('index', { layout: false });
});

module.exports = router;