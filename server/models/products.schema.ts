import { OrderItemSchema } from './orderitem.schema'
import { defineMongooseModel } from '#nuxt/mongoose'

export const ProductsSchema = defineMongooseModel({
  name: 'ProductsSchema',
  schema: {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    created_at: Date,
  },
})
