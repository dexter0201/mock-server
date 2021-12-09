const express = require("express");

const router = express.Router();

router.post("/api/auth/transaction-authorizations", (req, res) => {
  console.log("In the com.clevercards.tfs.router");
  console.info("Raw headers", req.headers);
  console.info("Request body", req.body);

  if (req.body.mti === "0420") {
    setTimeout(() => {
      res.status(409).jsonp({
        error:
          "org.hibernate.exception.ConstraintViolationException: could not execute statement",
        description: "could not execute statement",
      });
    }, 5000);
  } else {
    res.status(200).jsonp({
      authResponseCode: "00",
      approvedAmount: 10.0,
      authCode: "YpKQ5Y",
      additionalResponseData: {
        originalRequestedAmount: 10.0,
        updatedBalance: 51.99,
      },
    });
  }
});

module.exports = router;
