// @ts-ignore
import { defineMongooseModel } from "#nuxt/mongoose";

export const AddressesSchema = defineMongooseModel({
  name: "AddressesSchema",
  schema: {
    id: Number,
    userId: String,
    name: String,
    address: String,
    zipcode: String,
    city: String,
    country: String,
    created_at: String,
  },
});
