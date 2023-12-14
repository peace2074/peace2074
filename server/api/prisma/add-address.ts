import { connect } from "mongoose";
const $dbCon = connect(process.env.DATABASE_URL);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const res = await $dbCon.addresses.create({
    data: {
      userId: body.userId,
      name: body.name,
      address: body.address,
      zipcode: body.zipCode,
      city: body.city,
      country: body.country,
    },
  });

  return res;
});
