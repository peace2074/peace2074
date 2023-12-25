<script lang="ts" setup>
import { Notify } from 'quasar'
import { autoClass, autoStyle, isDark } from '../mixins'

function checkForUpdates() {
  Notify.create({
    message: `$t("fetchingUpdates")`,
    color: 'warning',
    icon: 'cloud_download',
    closeBtn: 'Update',
    timeout: 10000,
    onDismiss() {
      location.reload()
    },
  })
}
function onReload() {
  location.reload()
}
</script>

<template>
  <q-page padding class="q-pa-lg col q-mt-lg" :class="autoClass">
    <h1 class="text-h2 text-center">
      <strong>{{ $t("navigation.SettingsPageTitle") }}</strong>
    </h1>
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        :icon="isDark ? 'light_mode' : 'dark_mode'"
        :label="$t('lightMode')"
      >
        <q-card>
          <q-card-section>
            <q-toggle v-model="isDark" color="$info" clickable :label="$t('lightMode')" />
          </q-card-section>

          <q-card-section>
            <q-btn color="positive" label="check" @click="checkForUpdates" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        icon="globe"
        :label="$t('languages')"
      />
      <q-card>
        <q-card-actions />
        <q-card-section>
          <laguage-switcher />
        </q-card-section>
      </q-card>
    </q-list>
    <q-btn color="warning" text-color="white" label="Reload" @click="onReload" />
  </q-page>
</template>
