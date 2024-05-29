export default defineEventHandler(async (event) => {
  const _id: string | undefined = event.context.params?.id;
  if (!_id) {
    return null;
  }
  const product = await ProductsSchema.find({
    where: {
      _id,
    },
  });
  return await product;
});
