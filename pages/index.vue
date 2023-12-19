<script lang="ts" setup>
import { autoClass } from '~/mixins';
</script>;
<template>
    <q-page padding :bind="autoClass">
        <h1>{{ $t('welcome') }}</h1>
    </q-page>
</template>
<style>
.bg-dark {
    background-color: black !important;
    ;
    color: white;
}

.bg-white {
    background-color: white !important;
}

.text-dark {
    color: black !important;
    ;
}
</style>