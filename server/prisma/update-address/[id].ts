export default defineEventHandler(async (event) => {
  const { $dbCon } = useNuxtApp();

  const body = await readBody(event);

  const res = await $dbCon.addresses.update({
    where: { id: Number(event.context.params.id) },
    data: {
      name: body.name,
      address: body.address,
      zipcode: body.zipCode,
      city: body.city,
      country: body.country,
    },
  });

  return res;
});
