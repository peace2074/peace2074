export default defineEventHandler(async (event) => {
  const { $dbCon } = useNuxtApp();

  let items = await $dbCon.products.findMany({
    take: 5, // Max rows
    where: {
      title: {
        contains: event.context.params.id,
        mode: "insensitive",
      },
    },
  });

  return items;
});
