
const nodemailer = require("nodemailer");





function userSendMessage(name, email, phone, weddingDate, appointmentDate, details) {
  const transporter = nodemailer.createTransport({
    //host: "pop3.stackmail.com",
    //port: 995,
    //port:993,

    host:'smtp-mail.outlook.com',
    port:587,
    secure:false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from:process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `new message from trulygorgeous.co.uk`,
    html: `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Wedding Date: ${weddingDate}</p>
    <p>Appointment Date: ${appointmentDate}</p>
    <p>Details: ${details}</p>
    
    `
  };

 
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(info.response);
  });
}

module.exports = {userSendMessage};
