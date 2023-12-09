import client from "~/config/client";
import {
  github,
  // google,
  // twilio,
  // facebook,
  // discord,
  // spotify,
} from "worker-auth-providers";
// @ts-ignore
export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    // const { clientId } = useRuntimeConfig();
    const redirectTo = location.href.substring(
      0,
      location.href.trim().indexOf("?")
    );
    const clientId = client.Credentials.github.clientId;
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
  }
});
