<script  setup>
const $q = useQuasar()
const $router = useRouter()
const menu_cat_elc = ref(false)
const menu_cat_tvs = ref(false)
const menu_cat_men = ref(false)
const notifications = ref(0)
const isSearching = ref(false)
const openRightDrawer = ref(false)
const text = ref('')
const dimensions = ref($q ? $q.screen : { height: 1000 })
const draggingFab = ref(true)
let fabPos = ref([18, 18])
const moveFab = (ev) => {
    draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
    fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos[1] - ev.delta.y];
}
const leftDrawer = ref(false)
const classNav = ref("text-caption hover_underline_white text-white block")
</script>

<template>
    <q-layout view="lHh LpR lFf">
        <q-header reveal elevated>
            <!-- Mobile & Tablets -->
            <q-toolbar v-if="!$q.platform.is.desktop" class="q-py-sm">
                <q-space />
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <q-toolbar-title class="bg-primary">
                            <nuxt-link to="/" class="flex inline-block">
                                <img class="cursor-pointer float-left" src="/images/logo.png" style="width: 12%" />
                                <span class="q-mt-xs q-ml-md text-h6 text-weight-bold"
                                    style="font-size: 17px;">{{ $t('general.SiteTitle') }}</span>
                            </nuxt-link>
                            <span class="q-mt-md q-ml-lg inline-block">
                                <q-input v-if="isSearching" class="q-mx-md" square bg-color="white" dense outlined
                                    v-model="text" label="Search for products, brands and more" />
                                <q-icon v-else class="text-h5" name="search" />
                            </span>
                        </q-toolbar-title>
                    </div>
                    <laguage-switcher />
                    <div class="col-sm-12 col-xs-12 q-mt-md">
                        <div>
                            <q-btn flat round dense icon="settings" class="q-mr-md" />
                            <q-btn flat round dense icon="fas fa-sign-out-alt"
                                @click="openRightDrawer = !openRightDrawer" />
                        </div>
                    </div>
                </div>
                <!--          <q-btn @click="left = !left" flat round dense icon="menu" class="q-mr-sm" />-->
            </q-toolbar>
            <!-- Desktop -->
            <q-toolbar v-if="$q.platform.is.desktop" class="q-py-sm">
                <!--          <q-btn @click="left = !left" flat round dense icon="menu" class="q-mr-sm" />-->
                <img @click="$router.push('/')" class="cursor-pointer" src="/images/logo.png" style="width: 3%" />
                <q-toolbar-title>
                    <span class="float-left q-mt-xs text-h6 text-weight-bold" style="font-size: 17px;">
                        {{ $t('name') }}</span>
                    <q-btn flat color="black" @click="$q.dark.toggle()" icon="light" />
                    <q-input class="q-mx-auto st-md" style="width: 650px;" square bg-color="white" dense outlined
                        v-model="text" v-if="isSearching" label="Search for products, brands and more" />
                    <q-icon v-else name="search" class="text-h4 q-mx-auto q-px-sm" @click="isSearching = !isSearching" />
                </q-toolbar-title>
                <laguage-switcher />
                <q-btn class="q-mr-md" dense round flat icon="shopping_cart">
                    <q-badge color="red" class="text-bold" floating transparent>
                        {{ notifications }}
                    </q-badge>
                </q-btn>
                <q-btn flat round dense icon="settings" class="q-mr-md" />
                <q-btn flat round dense icon="fas fa-sign-out-alt" to="/" />

            </q-toolbar>
            <!-- Menu -->
            <div class="gt-sm">
                <div class="bg-white text-grey-9 text-weight-bold shadow-transition">
                    <div class="row text-center items-center" :style="$q.platform.is.desktop ? 'height: 38px' : ''">
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"
                            @mouseover="menu_cat_elc = true">
                            Electronics
                            <q-menu fit @mouseleave="menu_cat_elc = false" v-model="menu_cat_elc"
                                transition-show="flip-right" transition-hide="flip-left">
                                <q-list dense class="text-grey-9 text-caption">
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Mobiles</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Laptops</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Health Care Appliances</q-item-section>
                                    </q-item>
                                    <!--<q-separator/>-->
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Speakers</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Smart Home Automation</q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                            <q-icon size="sm" class="q-ml-xs text-grey-5" name="keyboard_arrow_down"></q-icon>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"
                            @mouseover="menu_cat_tvs = true">
                            TVs and Appliances
                            <q-menu fit @mouseleave="menu_cat_tvs = false" v-model="menu_cat_tvs"
                                transition-show="flip-right" transition-hide="flip-left">
                                <q-list dense class="text-grey-9 text-caption">
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Television</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Air Conditioners</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Health Care Appliances</q-item-section>
                                    </q-item>
                                    <!--<q-separator/>-->
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Shop By Screen Size</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Smart Home Appliances</q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                            <q-icon size="sm" class="q-ml-xs text-grey-5" name="keyboard_arrow_down"></q-icon>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"
                            @mouseover="menu_cat_men = true">
                            Men
                            <q-menu fit @mouseleave="menu_cat_men = false" v-model="menu_cat_men"
                                transition-show="flip-right" transition-hide="flip-left">
                                <q-list dense class="text-grey-9 text-caption">
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Footwear</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Clothing</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push(localePath('category'))" clickable>
                                        <q-item-section>Sports & Fitness Store</q-item-section>
                                    </q-item>
                                </q-list>
                            </q-menu>
                            <q-icon size="sm" class="q-ml-xs text-grey-5" name="keyboard_arrow_down"></q-icon>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue">
                            Women
                            <q-icon size="sm" class="q-ml-xs text-grey-5" name="keyboard_arrow_down"></q-icon>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue">
                            Home & Furniture
                            <q-icon size="sm" class="q-ml-xs text-grey-5" name="keyboard_arrow_down"></q-icon>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue">
                            Offers
                        </div>
                    </div>
                </div>
            </div>

        </q-header>
        <q-drawer v-model="openRightDrawer" v-if="!$q.platform.is.desktop" side="right" show-if-above :width="200"
            :breakpoint="700" elevated class="bg-primary text-white">
            <q-scroll-area class="fit">
                <div class="q-pa-sm">
                    <div class="flex">
                        <div class="q-mt-sm col justify-center align-between">
                            <NuxtLink :title="$t('navigation.AboutPageTitle')" class="text-subtitle1 text-weight-bold" />

                            <div class="text-subtitle1 text-weight-bold">About</div>
                            <div class="text-caption hover_underline_white q-mt-sm">Contact us</div>
                            <div :class="classNav">About Us</div>
                            <div :class="classNav">Careers</div>
                            <div :class="classNav">Our Stories</div>
                            <div :class="classNav">Press</div>
                        </div>
                        <div class="q-mt-sm col justify-center align-between wrap">
                            <div class="text-subtitle1 text-weight-bold">Connect</div>
                            <div class="text-caption hover_underline_white q-mt-sm">Facebook</div>
                            <div :class="classNav">Instagram</div>
                            <div :class="classNav">Twitter</div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white">
                            <div class="text-subtitle1 text-weight-bold">Policy</div>
                            <div class="text-caption hover_underline_white q-mt-sm">Return Policy</div>
                            <div :class="classNav">Terms Of Use</div>
                            <div :class="classNav">Security</div>
                            <div :class="classNav">Privacy</div>
                            <div :class="classNav">Sitemap</div>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white">
                            <div class="text-subtitle1 text-weight-bold">Help</div>
                            <div class="text-caption hover_underline_white q-mt-sm">Payments</div>
                            <div :class="classNav">Shipping</div>
                            <div :class="classNav">Cancellation & Returns</div>
                            <div :class="classNav">FAQ</div>
                        </div>

                    </div>
                </div>
            </q-scroll-area>
        </q-drawer>
        <q-footer reveal elevated>
            <div class="flex space-around q-px-md align-center">
                <div class="q-mt-sm col justify-center">
                    <div class="text-subtitle1 text-weight-bold">{{ $t('navigation.AboutPageTitle') }}</div>
                    <NuxtLink :class="classNav" to="/about"> {{ $t("navigation.AboutPageCaption") }} </NuxtLink>
                    <NuxtLink :class="classNav" to="/contact"> {{ $t('navigation.ContactPageTitle') }} </NuxtLink>
                    <NuxtLink :class="classNav" to="/terms"> {{ $t('navigation.TermsPageTitle') }} </NuxtLink>
                    <NuxtLink :class="classNav" to="/privacy"> {{ $t('navigation.PrivacyPageTitle') }} </NuxtLink>
                </div>
                <div class="q-mt-sm col justify-center">
                    <div class="text-subtitle1 text-weight-bold">Policy</div>
                    <NuxtLink :class="classNav" :title="$t('navigation.TermsPageTitle')" to="/terms"></NuxtLink>
                    <div :class="classNav">Security</div>
                    <NuxtLink :class="classNav" :title="$t('navigation.PrivacyPageTitle')" to="/privacy">
                        {{ $t('navigation.PrivacyPageTitle') }}</NuxtLink>
                    <div :class="classNav">Sitemap</div>
                </div>
                <div class="q-mt-sm col justify-center">
                    <div class="text-subtitle1 text-weight-bold">עזרה</div>
                    <div class="text-caption hover_underline_white q-mt-sm">Payments</div>
                    <div :class="classNav">Shipping</div>
                    <div :class="classNav">Cancellation & Returns</div>
                    <div :class="classNav">FAQ</div>
                </div>

            </div>


        </q-footer>

        <q-page-container style="background-color:#f1f2f6">
            <ClientOnly>
                <slot />
                <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="fabPos" :draggable="draggingFab"
                    v-touch-pan.prevent.mouse="moveFab">
                    <q-btn fab :color="isDark ? 'white' : 'dark'" :text-color="!isDark ? 'white' : 'dark'"><q-icon
                            name="keyboard_arrow_up" /></q-btn>
                </q-page-scroller>
            </ClientOnly>
        </q-page-container>


    </q-layout>
</template>

<style>
.q-drawer {
    /*background-image: url(https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg) !important;*/
    background-image: url('/images/lake.jpg') !important;
    background-size: cover !important;
}

.q-drawer__content {
    background-color: rgba(1, 1, 1, 0.75);
}

.navigation-item {
    border-radius: 5px;
}

.tab-active {
    background-color: green;
}

.hover-blue:hover {
    color: #1f509e;
}

.hover_underline_white:hover {
    text-decoration: underline !important;
    cursor: pointer;
}

.hover_border_grey:hover {
    border: 1px solid lightgrey;
    cursor: pointer;
    border-radius: 3px;
}
</style>
