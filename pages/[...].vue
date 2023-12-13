<script setup>
const localePath = useLocalePath()
</script>
<template>
    <div>
        <h1>Opps ...</h1>
        <NuxtLink :to="localePath('')">{{ $t('home') }}</NuxtLink>

    </div>
</template>