const express = require("express");
const app = express();
const scheduler = require("node-cron");
const hbs = require("nodemailer-express-handlebars");
const { transporter, options, handlebarOptions } = require("./services/email");
const PORT = 3001;
transporter.use("compile", hbs(handlebarOptions));
scheduler.schedule("* * * * *", () => {
  transporter.sendMail(options, (err, info) => {
    console.log(options.from, transporter, "ssss");
    if (err) {
      console.log(err);
    }
    console.log("Email send with info = ", info);
  });
});
app.listen(PORT, () => {
  console.log("App is running at ", PORT);
});
