
const aiService = require("../services/ai.services.js");


module.exports.getReview = async function(req,res){

    const code = req.body.code;

    if(!code){
        return res.status(400).send("prompt required")
    }

  const response =   await aiService(code);
  res.send(response);

};
