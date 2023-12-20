<template>
    <q-drawer bordered v-model="drawerActive" :width="drawerWidth" :breakpoint="drawerBreakPoint" :side="side"
        :dark="$q.dark.isActive" @mouseover="drawerActive = true" @mouseout="miniActive = false" @mini-state="onMiniState"
        :mini="mini || false" behavior="desktop" class-class="d-grid">
        <q-scroll-area class="fit">
            <q-list class="q-pa-sm">
                <q-item-label header class="text-grey-8">
                    {{ $t("general.navigationLinks") }}
                </q-item-label>
                <EssentialLink v-bind="AuthLink" @closeDrawer="$emit('closeDrawer')"></EssentialLink>
                <EssentialLink @closeDrawer="$emit('closeDrawer')" @hover="$emit('expandDrawer')"
                    v-for="(link, index) in sortedBasics" :key="link.title" v-bind="link" :title="link.title" :index="index"
                    :separator="link.separator" :alt="$t(link.title)">
                    <q-separator :key="'sep' + index" />
                </EssentialLink>
                <EssentialLink @closeDrawer="$emit('closeDrawer')" @hover="$emit('expandDrawer')"
                    v-for="(link, index) in sortedLinks" :key="link.title" v-bind="link" :title="link.title" :index="index"
                    :separator="link.separator" :alt="$t(link.title)">
                    <q-separator :key="'sep' + index" />
                </EssentialLink>
                <LanguageSwitcher v-if="false" />
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>
<script lang="ts" setup>

// import { throttle } from "quasar";



const drawerWidth = ref(250)
const drawerBreakPoint = ref(500)
const drawerActive = ref(false)
const mini = ref(false)

const onDrawerMini = (value: boolean) => {
    mini.value = !!value;
}
const onNavigationDrawer = (value: boolean) => {
    drawerActive.value = value;
}
const onMiniToggle = () => {
    mini.value = Boolean(drawerActive);
}
const onMiniState = (value: boolean) => {
    mini.value = Boolean(value);
    return value;
}

computed: {
        ...mapGetters(["linksData", "linksBasics"]),
        screen() {
        return $vault.get("env:screen");
    }
    sortedBasics() {
        if (linksBasics && linksBasics.length) {
            return _.orderBy(linksBasics, ["order"], ["asc"]);
        } else {
            return linksBasics;
        }
    }
    const sortedLinks = () => {
        if (linksData && linksData.length) {
            return _.orderBy(linksData, ["order"], ["asc"]);
        } else {
            return linksData;
        }
    }
    const AuthLink = computed(() => {
        return !isAuthenticated
            ? {
                title: "navigation.AuthPageTitle",
                caption: "navigation.AuthPageCaption",
                icon: "admin_panel_settings",
                link: "/auth/login"
            }
            : {
                title: "Logout",
                caption: "Sign out",
                icon: "home",
                link: "/auth/login"
            };
    })




</script>
<style lang="scss">
.d-grid {
    display: grid;
}

.d-contents {
    display: contents;
}
</style>