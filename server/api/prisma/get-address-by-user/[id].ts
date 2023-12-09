export default defineEventHandler(async (event) => {
  const res = await AddressesSchema.findt({
    where: { userId: event.context.params.id },
  });
  return res;
});
