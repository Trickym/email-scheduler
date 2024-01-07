const nodemailer = require("nodemailer");
const path = require("path");
const { USER_EMAIL, USER_PASSWORD } = require("../config/credentials");

const SMTP_PORT = 587;
const HOST_SERVICE = "smtp-relay.sendinblue.com";
const SENDER_EMAIL = USER_EMAIL;
const RECEIVER_EMAIL = "pm21641@gmail.com";
const CC = [];
const BCC = [];

const EMAIL_SUBJECT = "Hello Bro!";

const EMAIL_BODY_HTML = "";

const options = {
  from: SENDER_EMAIL,
  to: RECEIVER_EMAIL,
  cc: CC,
  bcc: BCC,
  subject: EMAIL_SUBJECT,
  template: "email",
};

const transporter = nodemailer.createTransport({
  host: HOST_SERVICE,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD,
  },
});

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve("../email-scheduler/views"),
    defaultLayout: false,
  },
  viewPath: path.resolve("../email-scheduler/views"),
  extName: ".handlebars",
};

module.exports = { transporter, options, handlebarOptions };
