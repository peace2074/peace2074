export default defineEventHandler(async (event) => {
  let product = await ProductsSchema.find({
    where: { _id: Number(event.context.params.id) },
  });
  return product;
});
