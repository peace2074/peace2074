<script setup>
// const user = useSupabaseUser()

import hello from 'hellojs'

watchEffect(() => {
  if (user.value)
    return navigateTo('/')
})

async function login(prov) {
  const { data, error } = hello(prov).login()
  console.log(data)
  console.log(error)
  return data
}
</script>

<template>
  <div id="AuthPage" class="h-[100vh] w-full bg-white">
    <div class="w-full flex items-center justify-center border-b border-b-gray-300 p-5">
      <NuxtLink to="/" class="min-w-[170px]">
        <img width="170" src="/images/logo.png">
      </NuxtLink>
    </div>

    <div class="mx-auto max-w-[400px] px-2">
      <div class="my-6 text-center">
        Login / Register
      </div>

      <button
        class="w-full flex items-center justify-center gap-3 border rounded-full p-1.5 text-lg font-semibold hover:bg-gray-100" @click="login('google')"
      >
        <img class="max-w-[30px] w-full" src="/google-logo.png">
        <div>Google</div>
      </button>

      <button
        class="mt-4 w-full flex items-center justify-center gap-3 border rounded-full p-1.5 text-lg font-semibold hover:bg-gray-100" @click="login('github')"
      >
        <img class="max-w-[30px] w-full" src="/github-logo.png">
        <div>Github</div>
      </button>
    </div>
  </div>
</template>
