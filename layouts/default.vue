<script lang="ts" setup>
import { autoClass } from '~/mixins'
import { links1 } from '~/static'

const leftDrawerOpen = ref(false)
const search = ref('')

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
const links = ref([
  { text: 'Account' },
  { text: 'Payment methods' },
  { text: 'My subscriptions' },
  { text: 'Redeem' },
  { text: 'Buy gift card' },
  { text: 'My wishlist' },
  { text: 'My Play activity' },
  { text: 'Settings' },
])
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="bg-grey-3 text-grey-9" reveal height-hint="60">
      <q-toolbar class="GPLAY__toolbar text-grey-6">
   
        <div v-if="$q.screen.gt.xs" class="q-pr-lg">
          <span @click="$router.push('/')">
            <q-img  :ratio="1/1" class="__logo" src="/lg.png" />
          </span>
        </div>

        <q-space />



        <q-space />

        <div class="q-pl-md q-gutter-sm row no-wrap items-center">
          <q-btn round dense flat color="grey-8" size="14px" to="/settings" icon="settings">
            <q-tooltip>Settings</q-tooltip>
          </q-btn>

          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              0
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>

          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container class="fit items-middle flex justify-center">
      <slot />
      <q-page-sticky expand position="top">
        <q-toolbar class="GPLAY__sticky q-px-xl" :class="autoClass">
          <q-space />
          <q-btn icon="home" :class="autoClass" to="/" dense flat size="12px" class="GPLAY__sticky-help" />
          <q-btn icon="help" :class="autoClass" to="/help" dense flat size="12px" class="GPLAY__sticky-help" />
          <q-btn icon="settings" :class="autoClass" to="/settings" dense flat class="GPLAY__sticky-settings q-ml-md"
            size="12px" />
        </q-toolbar>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
  .__logo {
    width: 50px;
    height: 50px;
    margin-top: 5px;
    padding: 10px;
    /*background-color: #0382db;*/
    display: flex;
    overflow: hidden;
    cursor: pointer;
  }
</style>