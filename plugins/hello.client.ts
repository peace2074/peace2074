import hello from "hellojs";
export default defineNuxtPlugin(({ provide }) => {
  const config = useRuntimeConfig();
  hello.init({
    github: config.githubClientId,
  });

  return {
    provide: {
      hello,
    },
  };
});
