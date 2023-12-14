export default defineEventHandler(async (event) => {
  const { $dbCon } = useNuxtApp();

  let orders = await $dbCon.orders.findMany({
    where: { userId: event.context.params.userId },
    orderBy: { id: "desc" },
    include: {
      orderItem: {
        include: {
          product: true,
        },
      },
    },
  });
  return orders;
});
