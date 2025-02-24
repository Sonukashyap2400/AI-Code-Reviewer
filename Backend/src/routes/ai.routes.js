const express = require("express");
const router = express();
const aiController =require("../controllers/ai.controllers.js");

router.post("/get-review",aiController.getReview )


module.exports = router;