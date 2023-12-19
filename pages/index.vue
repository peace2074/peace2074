<script lang="ts" setup>
import { autoClass } from '~/mixins';
</script>;
<template>
    <q-page padding :class="autoClass">
        <h1>{{ $t('welcome') }}</h1>
    </q-page>
</template>