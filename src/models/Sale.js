const { Schema, model } = require("mongoose");

const SaleSchema = new Schema(
  {
    saleName: {
      type: String,
      required: true
    },
     icecream: {
      type: Schema.Types.ObjectId,
      ref: "icecream"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  },
  {
    timestamp: true
  }
);
module.exports = model("Sale", SaleSchema);
