const { Schema, model } = require("mongoose");

const IcecreamSchema = new Schema(
  {
    flavor: {
      type: String,
      required: true,
      unique: true
    },
    price: {
      type: Number,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
    {
      timestamps: true
    }
   
);
module.exports = model("Icecream", IcecreamSchema);
