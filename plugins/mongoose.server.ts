import { connect } from "mongoose";

export default defineNuxtPlugin(async () => {
  const uri = process.env.DATABASE_URL;
  // @ts-ignore
  const $dbCon = await connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return {
    provide: {
      dbConn: $dbCon,
    },
  };
});
