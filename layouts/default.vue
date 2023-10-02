<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { conf } from '../utils/conf'
import { ref } from '#imports'

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)
const { t } = useI18n()

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          {{ conf.get('app:businessName') }}
        </q-toolbar-title>
        <select v-model="$i18n.locale" class="txt-white bg-primary">
          <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
            {{ locale }}
          </option>
        </select>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" :label="$t('general.Home')" />
        <q-route-tab to="/blog/quran" :label="$t('general.Quran')" />
        <q-route-tab to="/blog/holynames" :label="$t('general.HolyNames')" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" show-if-above side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="flex justify-between">
            <div>
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
              </q-avatar>
              <span class="q-mx-sm">{{ conf.get('app:businessName') }}</span>
            </div>
            <span class="q-mx-sm">{{ t('name') }}</span>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
