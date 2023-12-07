import {
  github,
  // google,
  // twilio,
  // facebook,
  // discord,
  // spotify,
} from "worker-auth-providers";
// @ts-ignore
export default defineNuxtPlugin(async (_nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const redirectTo = location.href.substring(
    0,
    location.href.trim().indexOf("?")
  );
  const clientId = runtimeConfig.githubClientId;
  console.log("clientId", clientId);

  const githubLoginUrl = await github.redirect({
    options: {
      clientId,
      redirectTo,
    },
  });

  return {
    status: 302,
    headers: {
      location: await githubLoginUrl,
    },
  };
});
