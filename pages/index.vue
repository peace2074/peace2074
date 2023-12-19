<script lang="ts" setup>
const title = ref('Start')
import { autoClass } from '~/mixins';
</script>;
<template>
    <q-page padding :class="autoClass">
        <h1 :class="autoClass">{{ title }}</h1>
    </q-page>
</template>