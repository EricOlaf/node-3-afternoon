// const swag = require("../models/swag");

// module.exports = {
//   read: (req, res, next) => {
//     req.status(200).send(swag);
//   }
// };

const swag = require("../models/swag");

module.exports = {
  read: (req, res, next) => {
    res.status(200).send(swag);
  }
};
