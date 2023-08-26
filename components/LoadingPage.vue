<script lang="ts" setup>
import { ref } from "vue";
const visible = ref(false);
const showSimulatedReturnData = ref(false);

const showTextLoading = () => {
  visible.value = true;
  showSimulatedReturnData.value = false;

  setTimeout(() => {
    visible.value = false;
    showSimulatedReturnData.value = true;
  }, 3000);
};
</script>
<template>
  <div class="q-pa-md q-gutter-md">
    <q-card class="relative-position card-example" flat bordered>
      <q-card-section>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
        </transition>
      </q-card-section>

      <q-card-section v-show="showSimulatedReturnData" class="q-pb-none">
        <div class="text-h6">We're here, please wait ...</div>
        <q-inner-loading>
          <q-spinner-gears size="50px" color="primary" />
        </q-inner-loading>
      </q-card-section>

      <q-inner-loading :showing="visible">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
  </div>
</template>
