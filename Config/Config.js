const mongoose = require("mongoose");
const Connect = mongoose.connect(
  "mongodb+srv://prcrindiacom:prcrindiamongo123@cluster0.yufj2by.mongodb.net/kent?retryWrites=true&w=majority"
);
module.exports = {
  Connect,
};
