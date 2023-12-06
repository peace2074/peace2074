import {
  github,
  google,
  twilio,
  facebook,
  discord,
  spotify,
} from "worker-auth-providers";

export default defineNuxtPlugin(async({ provide }) => {
  const config = useRuntimeConfig();
  const githubLoginUrl = await github.redirect({
    options: {
      config.githubClientId,
    },
});
return {
    status: 302,
    headers: {
        location: githubLoginUrl,
    },
};
});
