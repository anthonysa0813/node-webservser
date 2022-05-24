const express = require("express");
const cors = require("cors");
const router = require("../routes/user");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.middlewares(); // es importante que esto este antes que las routes()
    this.routes();
  }

  middlewares() {
    // permite consumir y parser info
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use("/api/usuarios", router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`the application running in the port ${this.port}`);
    });
  }
}

module.exports = Server;
