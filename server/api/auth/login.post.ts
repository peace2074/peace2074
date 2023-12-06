export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  //@ts-ignore
  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Ivalid params",
      })
    );
  }
  const user = await getUserByUsername(username);
}); // End
