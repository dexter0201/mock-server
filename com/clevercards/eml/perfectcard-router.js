const express = require("express");

const router = express.Router();

router.post("/Token", (req, res) => {
  res.status(200).jsonp({
    access_token:
      "VpWb7t9N1JjHTmdZbkyGfGojQaBTSgMTOQYiS1HmKRd9dnUNLN5eeYgrlJ9YfIeLiC3tRvd_8TgzXWC1Q7DEsjgNKsdHib7yn5PKbzO1Gq-CXA0Hs9sv5-VPH2EJ6lGomIuo-qVhbbZAM2H30RsGVrUhcBvnY37YmZAWJ8dwgbKucN4bl4sR_2dJdXaOiqMSZbu8NH0neq1stBrx-pO3Ke2h9y9Q_z0VVDJNVZXff_UgF39fFsSztinMnRTgdbLdiDg0cN1qleGf0diuLCfskpGPahMznHcf5qtI-51Q-A-X0hJYIijF9be54FXgFeM87kMnFn4Hg67iW5lbb1lLg493qL1m8Psv81KT5nHyrkJ3uwMUQs-FZwRcpNmaPzS3c9RzkMh4G8tCgkFv9QeyvDYY56AMP8Pr0BCPFBEXpj9UWCINrZNJfWT3g58p45IbltglwrKyLEOtooo3SKqC7OpQzP2fcyiSW2LToRKFTP_Wns_lv9W8CqXMvuaG1GuOMwoYsh3bK0Jxopxc7mOamFdV6XOxBfx0zNX6hKgiYbQaT2XFXSf75BwEDMohAr9t4K1rLpmyX8P4QY8a_DrhJyzPOGk",
    token_type: "bearer",
    expires_in: 1209599,
    refresh_token:
      "gJGAuGFrDC7To1TS1e1DrIKOgG3bwHmbzBuO8cYVJ6eYq8Rp371K_MbSVE2GpMrymsbUIruwi6JddhdrNxQh0FjCIwLX3m1oYLqmJ6tPQv9WZXBS-GN5cc_efjbJWR5LwrlJlT0owtf3gHQ8_lFMgIlxHusufrZcC4825Kp9ce6AErSElemamC0rZB3I7yAFmbeLtVl5IqS9XUSoaOLg1ldpHZhnXbhzlIvNlGG2kVppu2_NaPBcfoNf0W1SqkU-ZwS-8oVG0ncaiuGX3YydqB0UDLKwRk7guWRYcDSIGRbY7NMowV3rZCMYvv3rw73v3-_72uUVYBwC2N5crKNdiqgVmPKD_yUt98qQUZPh6q2uo5wXZAyIGHZXoqQ6gGwiLTIS7-G-iy8bUNtwAOFkgzqHjyB1IBLUqeLMloTTYnubYlcTk6gU5hSLmOS-i9OzSBsINyRRapgsTbgnhZWoHFy6iSTNKryrNWpWjeEmme5_MqSQXWppiHVGm70vB0ODwLt79FQJ0wEpjEKbpFGI4GU_JjZbTcRlO7Q0OkdDCTK5lUfmOI4ddycEuMRa4yPUsYoALuGT0TsehUvKjHLN38gizV0",
    userName: "cleverbug@perfectcardit.ie",
    "as:client_id": "",
    ".issued": "Thu, 25 Jul 2019 12:56:19 GMT",
    ".expires": "Thu, 08 Aug 2019 12:56:19 GMT",
  });
});

router.get("/OpenApi/V1/Card/GetToken", (req, res) => {
  const { CardIdentifier, CardIdentifierType } = req.query;
  console.log(
    `CardIdentifier ${CardIdentifier} CardIdentifierType ${CardIdentifierType}`
  );

  res.status(200).jsonp({
    CardId: 249168,
    CardToken:
      "MkORXkxia1VQhVBqYkGH7mQwtJhPdiMeV7FSVI8t%2bS6IPLn3HzpjrYRmIf5ge1%2fdZezWdMsrFBcutCCiPPgYiQ2BsmOxdNp98qNyna%2fkoRiM0yu44rXaCpobPcyjcL2P",
  });
});

router.get("/OpenApi/V1/Card/Details", (req, res) => {
  const { CardToken, CardIdentifier, CardIdentifierType } = req.query;
  console.log(
    `CardIdentifier ${CardIdentifier} CardIdentifierType ${CardIdentifierType} CardToken ${CardToken}`
  );

  res.status(200).jsonp({
    CardId: 1935803,
    Name: null,
    ExpiryDate: "2022-01-31T23:59:58.99",
    FormattedExpiryDate: "01/2022",
    AccountExpiryDate: null,
    FormattedAccountExpiryDate: null,
    Pan: "5318378846362800",
    FormattedPan: "5318 3788 4636 2800",
    Cvc: "411",
    CardImageUrl: null,
    Balance: 100,
    Currency: 2,
    DisplayAmount: "£100",
    CardStatus: 2,
    Message: "",
    Template: null,
    FooterInfo: {
      Issuer: 2,
      TermsOfUseLink: null,
      SupportEmail: null,
      SupportPhone: null,
    },
  });
});

router.get("/OpenApi/V1/Card/Transactions", (req, res) => {
  const { CardIdentifier, CardIdentifierType } = req.query;
  console.log(
    `CardIdentifier ${CardIdentifier} CardIdentifierType ${CardIdentifierType}`
  );

  const o = [
    {
      CardTransactionId: 18363686,
      Pending: false,
      Message: "Open Api Load",
      Currency: 2,
      CardStatus: 0,
      TransactionType: 3,
      Amount: 500.0,
      Balance: 500.0,
      TxnDate: "2021-12-09T16:27:16.477",
      TxnAmount: 500.0,
      TxnCurrency: "GBP",
      ExtCardTransactionId: null,
    },
    {
      CardTransactionId: 18423771,
      Pending: false,
      Message: "Juno Media Limited",
      Currency: 2,
      CardStatus: 0,
      TransactionType: 8,
      Amount: -131.62,
      Balance: 368.38,
      TxnDate: "2021-12-10T00:49:09.977",
      TxnAmount: -148.93,
      TxnCurrency: "EUR",
      ExtCardTransactionId: null,
    },
    {
      CardTransactionId: 18534808,
      Pending: true,
      Message: "SUPERVALU SKERRIES    ",
      Currency: 2,
      CardStatus: 0,
      TransactionType: 8,
      Amount: -49.26,
      Balance: 368.38,
      TxnDate: "2021-12-11T17:08:47.6",
      TxnAmount: -56.0,
      TxnCurrency: "EUR",
      ExtCardTransactionId: null,
    },
    {
      CardTransactionId: 18476278,
      Pending: false,
      Message: "Merge Fee",
      Currency: 2,
      CardStatus: 0,
      TransactionType: 7,
      Amount: -4.9,
      Balance: 222.06,
      TxnDate: "2021-12-10T18:08:23.943",
      TxnAmount: -4.9,
      TxnCurrency: "GBP",
      ExtCardTransactionId: null,
    },
    {
      CardTransactionId: 18476279,
      Pending: false,
      Message: "Defunding of EUR MasterCards for fx 1-1 before 9th Dec 2021",
      Currency: 2,
      CardStatus: 0,
      TransactionType: 7,
      Amount: -50,
      Balance: 222.06,
      TxnDate: "2021-12-10T18:08:23.943",
      TxnAmount: -50,
      TxnCurrency: "GBP",
      ExtCardTransactionId: null,
    },
  ];

  res.status(200).jsonp(o);
});

module.exports = router;
