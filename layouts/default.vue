<template>
    <client-only>
        <q-Layout view="lHh Lpr lFf" container :style="`height:${dimensions.height * .96}px;`">
            <q-header reveal elevated>
            </q-header>
            <q-page-container>
                <slot />
                <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="fabPos" :draggable="draggingFab"
                    v-touch-pan.prevent.mouse="moveFab">
                    <q-btn fab :color="isDark ? 'white' : 'dark'" :text-color="!isDark ? 'white' : 'dark'"><q-icon
                            name="keyboard_arrow_up" /></q-btn>
                </q-page-scroller>
            </q-page-container>

        </q-Layout>
    </client-only>
</template>

<script lang="ts" setup>
const $q = useQuasar()
const dimensions = ref($q ? $q.screen : { height: 1000 })
const draggingFab: Ref<boolean> = ref(true)
let fabPos: Ref<number[]> = ref([18, 18])
const moveFab = (ev): void => {
    draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
    fabPos = [fabPos[0] - ev.delta.x, fabPos[1] - ev.delta.y];
}
</script>

<style></style>