<script lang="ts" setup>
function checkForUpdates() {
    Notify.create({
        message: this.$t("general.fetchingUpdates"),
        color: "warning",
        icon: "cloud_download",
        closeBtn: "Update",
        timeout: 10000,
        onDismiss() {
            location.reload();
        }
    });
}

</script>
<template>
    <q-page padding class="q-gutter-md">
        <h1 class="text-h2 text-center"><strong>{{ $t('navigation.SettingsPageTitle') }}</strong></h1>
        <q-list bordered class="rounded-borders">
            <q-expansion-item expand-separator :icon="!$q.dark.isActive ? 'light_mode' : 'dark_mode'"
                :label="$t('general.lightMode')">
                <q-card class="nf" :dark="$q.dark.isActive">
                    <q-card-section>
                        <q-option-group :class="autoClass" inline v-model="currentMode" :options="modesLabelOptions"
                            :dark="$q.dark.isActive" />
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-expansion-item v-if="false" expand-separator icon="language" :label="labels.LangTitle">
                <q-card>
                    <q-card-section>
                        <lang-select>
                            <q-tooltip>
                                {{ $t("general.languages") }}
                            </q-tooltip>
                        </lang-select>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-expansion-item expand-separator icon="cloud_download" :label="'v' + $store.getters.Site.version + ' ' + $t('general.CheckUpdates')
                " header-class="text-primary">
                <q-card>
                    <q-card-section class="nf">
                        <q-btn ripple stretch icon="cloud_download" :label="$t('general.CheckUpdates')"
                            @click="checkForUpdates" />
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </q-list>
    </q-page>
</template>