<template>
  <div class="bg-pink-2 fit">
    <section class="wCard">
      <ui-card
        title="Flow"
        par1="Understanding Allows us communicate and share information."
        par2="With proper Understanding and communicating among team member the better the flow wi be."
      />
      <ui-card
        title="organize"
        par1="Bring information together from different sources, the use the tools to organize your priorities"
        par2="never undermine the strengh in orgabing your road ahead."
      />
      <ui-card title="master" />
      <ui-card title="change" />
    </section>
    <q-form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="ar">ar</option>
        <option value="he">he</option>
      </select>
      <p>{{ $t("welcome") }}</p>
    </q-form>
    <q-banner inline-actions class="text-white bg-red" v-if="!online">
      You have lost connection to the internet. This app is offline.
      <template v-slot:action>
        <q-btn flat color="white" label="Turn ON Wifi" />
      </template>
    </q-banner>
  </div>
</template>

<script setup lang="ts">
import { useOnline } from "@vueuse/core";
const { locale } = useI18n();

const online = useOnline();
</script>

<style lang="css"></style>
