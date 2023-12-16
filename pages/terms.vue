<script setup>
import { openURL } from 'quasar'
const { $_Conf } = useNuxtApp()
const localName = ref({ localName: $_Conf.get('app:businessName') })
const localUrl = ref($_Conf.get('app:businessDomain'))
</script>
<template>
  <q-page padding>
    <h1 class="text-h4 text-center"><strong>{{ $t('navigation.TermsPageTitle') }}</strong></h1>
    <p class="text-justify">{{ $t('terms.caption', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para1', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para2', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para3', localName) }}</p>
    <h4 class="text-center"><strong>{{ $t('terms.Cookies') }}</strong></h4>
    <p class="text-justify">{{ $t('terms.para4', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para5', localName) }}</p>
    <h4 class="text-center"><strong>{{ $t('terms.Licence') }}</strong></h4>
    <p class="text-justify">{{ $t('terms.para6', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para7', localName) }}</p>
    <ul>
      <li>{{ $t('terms.li1', localName) }}</li>
      <li>{{ $t('terms.li2', localName) }}</li>
      <li>{{ $t('terms.li3', localName) }}</li>
      <li>{{ $t('terms.li4', localName) }}</li>
    </ul>
    <p class="text-justify">{{ $t('terms.para8', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para9', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para10', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para11', localName) }}</p>
    <ul>
      <li>{{ $t('terms.li5', localName) }}</li>
      <li>{{ $t('terms.li6', localName) }}</li>
      <li>{{ $t('terms.li7', localName) }}</li>
      <li>{{ $t('terms.li8', localName) }}</li>
    </ul>
    <p class="text-justify">{{ $t('terms.para12', localName) }}</p>
    <h4 class="text-center"><strong>{{ $t('terms.para13') }}</strong></h4>
    <p class="text-justify">{{ $t('terms.para14', localName) }}</p>
    <ul>
      <li>{{ $t('terms.li9', localName) }}</li>
      <li>{{ $t('terms.li10', localName) }}</li>
      <li>{{ $t('terms.li11', localName) }}</li>
      <li>{{ $t('terms.li12', localName) }}</li>
      <li>{{ $t('terms.li13', localName) }}</li>
    </ul>
    <p class="text-justify">{{ $t('terms.para17', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para15', localName) }}</p>
    <ul>
      <li>{{ $t('terms.li14', localName) }}</li>
      <li>{{ $t('terms.li15', localName) }}</li>
      <li>{{ $t('terms.li16', localName) }}</li>
      <li>{{ $t('terms.li17', localName) }}</li>
      <li>{{ $t('terms.li18', localName) }}</li>
      <li>{{ $t('terms.li19', localName) }}</li>
      <li>{{ $t('terms.li20', localName) }}</li>
    </ul>
    <p class="text-justify">{{ $t('terms.para16', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para17', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para18', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para19', localName) }}</p>
    <ul>
      <li>{{ $t('terms.li21', localName) }}</li>
      <li>{{ $t('terms.li22', localName) }}</li>
      <li>{{ $t('terms.li23', localName) }}</li>
    </ul>
    <p class="text-justify">{{ $t('terms.para20', localName) }}</p>
    <h4 class="text-center"><strong>{{ $t('terms.iFrames') }}</strong></h4>
    <p class="text-justify">{{ $t('terms.para21', localName) }}</p>
    <h4 class="text-center"><strong>{{ $t('terms.Liability') }}</strong></h4>
    <p class="text-justify">{{ $t('terms.para22', localName) }}</p>
    <h4 class="text-center"><strong>{{ $t('terms.Reservation') }}</strong></h4>
    <p class="text-justify">{{ $t('terms.para23', localName) }}</p>
    <h4 class="text-center"><strong>{{ $t('terms.Removal') }}</strong></h4>
    <p class="text-justify">{{ $t('terms.para24', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para25', localName) }}</p>
    <h4 class="text-center"><strong>{{ $t('terms.Disclaimer') }}</strong></h4>
    <p class="text-justify">{{ $t('terms.para26', localName) }}</p>
    <ul>
      <li>{{ $t('terms.li24', localName) }}</li>
      <li>{{ $t('terms.li25', localName) }}</li>
      <li>{{ $t('terms.li26', localName) }}</li>
      <li>{{ $t('terms.li27', localName) }}</li>
    </ul>
    <p class="text-justify">{{ $t('terms.para27', localName) }}</p>
    <p class="text-justify">{{ $t('terms.para28', localName) }}</p>
  </q-page>
</template>
