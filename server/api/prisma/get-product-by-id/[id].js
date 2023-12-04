export default defineEventHandler(async (event) => {
  let product = await ProductsSchema.find({
    where: { id: Number(event.context.params.id) },
  });
  return product;
});
