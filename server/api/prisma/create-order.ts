export default defineEventHandler(async (event) => {
  const { $dbCon } = useNuxtApp();
  const body = await readBody(event);

  const order = await $dbCon.orders.create({
    data: {
      userId: body.userId,
      stripeId: body.stripeId,
      name: body.name,
      address: body.address,
      zipcode: body.zipcode,
      city: body.city,
      country: body.country,
    },
  });

  body.products.forEach(async (prod) => {
    await prisma.orderItem.create({
      data: {
        orderId: order.id,
        productId: Number(prod.id),
      },
    });
  });

  return order;
});
