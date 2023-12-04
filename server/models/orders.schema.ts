import { defineMongooseModel } from "#nuxt/mongoose";

export const OrdersSchema = defineMongooseModel({
  name: "OrdersSchema",
  schema: {
    userId: {
      type: String,
    },
    stripeId: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    zipcode: {
      type: String,
    },
    city: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: true,
    },

    created_at: {
      type: Date,
    },
  },
});
