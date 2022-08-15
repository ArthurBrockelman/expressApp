const router = require('express').Router();
const e = require('express');
const logger = require("../../util/logger");

router.route('/*')
.get((req, res) => {
  logger.log("Get received on posts route");
  console.log(req.body)

  try {
      logger.log(req.params)
  } catch {
      logger.log(e)
  }

  parkCode = "ACAD"

  let parkData = async (parkCode) => {//Call the NPS api with the park code.
    console.log(parkCode)
  let response = await fetch(`https://developer.nps.gov/api/v1/newsreleases?parkCode=ACAD&api_key=Qljuiw8TZtWshEnVSv9ty3miWNXmxogbDyFkSSDZ`);
  
  //Wait for the response.
    
    return response.json()
  }

  parkData(parkCode)
    .then((data) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.send(data)
    })
})


module.exports =  router;
