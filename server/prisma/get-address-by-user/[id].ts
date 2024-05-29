export default defineEventHandler(async (event) => {
  const res = await AddressesSchema.find({
    where: { userId: event.context.params.id },
  });
  return res;
});
