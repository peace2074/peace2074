<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import { openURL } from 'quasar'
const { t } = useI18n()
const { $_Conf } = useNuxtApp();
const title = useTitle()
title.value = t("navigation.PrivacyPageTitle")
const url = $_Conf.get("client:app:businessDomain")

const includedTranslations = {
  localName: title,
  url: $_Conf.get("client:app:businessDomain"),
}
useHead({
  title: t("navigation.PrivacyPageTitle"),
  description: $_Conf.get("client:app:businessDescription"),
  url: $_Conf.get("client:app:businessDomain"),
  image: $_Conf.get("client:app:businessImage")
});



</script>
<template>
  <q-page padding class="fit scroll q-px-md nf" id="privacy_page">
    <h1 class="text-h2 text-center"><strong>{{ $t("navigation.PrivacyPageTitle") }}</strong></h1>
    <p class="text-justify">
      {{ $t("privacy.p1", includedTranslations) }}
    </p>
    <p class="text-justify">
      {{ $t("privacy.p2", includedTranslations)
      }}<span @click="
openURL.open(`mailto:info@${url}?subjuct=EMail%20from%20${url}`)
  ">{{ $t("privacy.here", includedTranslations) }}</span>
    </p>
    <p class="text-justify">
      {{ $t("privacy.p3", includedTranslations) }}
    </p>
    <h4 class="text-center"><strong>{{ $t("privacy.consent", includedTranslations) }}</strong>
    </h4>
    <p class="text-justify">
      {{ $t("privacy.p4", includedTranslations) }}
    </p>
    <h4 class="text-center"><strong>{{ $t("privacy.collect", includedTranslations) }}</strong></h4>
    <p class="text-justify">{{ $t("privacy.p5", includedTranslations) }}</p>
    <p class="text-justify">{{ $t("privacy.p6", includedTranslations) }}
      <span
        @click="openURL.open(`mailto:info@${url}?subjuct=EMail%20from%20${url}`)">{{ $t("privacy.here", includedTranslations) }}</span>
    </p>
    <p class="text-justify">
      {{ $t("privacy.p7", includedTranslations) }}
    </p>
    <h4 class="text-center"><strong>{{ $t("privacy.how", includedTranslations) }}</strong></h4>
    <p class="text-justify">
      {{ $t("privacy.p8", includedTranslations) }}
    </p>
    <ul>
      <li>{{ $tc("privacy.p8ul1", includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul2", includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul3", includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul4", includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul5", includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul6", includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul7", includedTranslations) }}</li>
    </ul>
    <h4 class="text-center"><strong>{{ $tc("privacy.log", includedTranslations) }}</strong></h4>
    <p>{{ $tc("privacy.p10", includedTranslations) }}</p>
    <h4 class="text-center"><strong>{{ $tc("privacy.Advertising", includedTranslations) }}</strong></h4>
    <p>{{ $tc("privacy.p11", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p12", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p13", includedTranslations) }}</p>
    <h4 class="text-center"><strong>{{ $tc("privacy.third", includedTranslations) }}</strong></h4>
    <p>{{ $tc("privacy.p14", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p15", includedTranslations) }}</p>
    <h4 class="text-center"><strong>{{ $tc("privacy.ccpa", includedTranslations) }}</strong></h4>
    <p>{{ $tc("privacy.p16", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p17", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p18", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p19", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p20", includedTranslations) }}</p>
    <h4 class="text-center"><strong>{{ $tc("privacy.gdpr", includedTranslations) }}</strong></h4>
    <p>{{ $tc("privacy.p21", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p22", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p23", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p24", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p25", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p26", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p27", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p28", includedTranslations) }}</p>
    <h4 class="text-center"><strong>{{ $tc("privacy.children", includedTranslations) }}</strong></h4>
    <p>{{ $tc("privacy.p29", includedTranslations) }}</p>
    <p>{{ $tc("privacy.p30", includedTranslations) }}</p>
  </q-page>
</template>
