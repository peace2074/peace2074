<template>
    <div class="q-page q-pa-lg">
        <ClientOnly>
            <LoginForm />
            <p class="q-px-md q-pl-lg q-my-md">
                New User?
                <NuxtLink to="/auth/register">Signup</NuxtLink>
            </p>
        </ClientOnly>
    </div>
</template>