const router = require('express').Router();
const logger = require("../../util/logger");

router.route('/')
.get((req, res) => {
    logger.log("hey from categorys");
    res.send({ok: true});

})

module.exports = router;
