import { defineMongooseModel } from "#nuxt/mongoose";

export const OrderItemSchema = defineMongooseModel({
  name: "OrderItemSchema",
  schema: {
    orderId: {
      type: Number,
      required: true,
    },
    productId: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
    },
  },
});
