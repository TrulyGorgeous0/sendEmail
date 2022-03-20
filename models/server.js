const express = require("express");
const cors = require("cors");



class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.emails = "/api/emails";

   

    this.middlewares();

    this.routes();
  }

 

  middlewares() {
     
 var corsOptions = {
  origin: ['http://localhost:3000', 'https://trulygorgeous.co.uk', 'https://zen-albattani-507a08.netlify.app'],
   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

    // Cors
    this.app.use(cors(corsOptions));

    // parseo y lectura del body
    this.app.use(express.json());

    this.app.use(express.static("public"));

    this.app.get("/", (req, res) => {
      res.send("Server is ready");
    });
  }

  routes() {
    this.app.use(this.emails, require("../routes/emailsRoutes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("server working in", this.port);
    });
  }
}

module.exports = Server;
