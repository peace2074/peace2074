
<script setup lang="ts">
import { ref } from "vue";


const title = ref("Peace2074 Homepage");
useHead({
    meta: [{ content: title }],
    titleTemplate: (titleChunk) => {
        return titleChunk
            ? `${titleChunk} - Blog and other tools`
            : "Blog and other tools";
    },
});
</script>

<template>
    <v-locale-provider>
        <v-app>
            <LayoutFullMain />
            <v-main>
                <v-container fluid class="page-wrapper">
                    <div class="maxWidth">
                        <NuxtPage />
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
