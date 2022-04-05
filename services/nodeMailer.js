
const nodemailer = require("nodemailer");





function userSendMessage(name, email, phone, weddingDate, appointmentDate, details) {
  const transporter = nodemailer.createTransport({
    
    // host:'smtp-mail.outlook.com',
    // port:587,
    // secure:false,

    host:'smtp.trulygorgeous.co.uk',
    port:465,
    secure:true,
    
   
    


    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from:process.env.EMAIL,
    //to: process.env.EMAIL,
    to:`${email}`,
    subject: `NEW BRIDE ENQUIRES`,
    
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
