const { userSendMessage } = require("../services/nodeMailer");

const Correo = require("../models/sendEmail");




const emailPostUser = async (req, res) => {


  
  const { name, email, phone, weddingDate, appointmentDate, details } = req.body;
 

  

  userSendMessage(name, email, phone, weddingDate, appointmentDate, details);



  res.json({
    msg: "SENT",
  });
  return;
};

module.exports = {

  emailPostUser,
 
};
