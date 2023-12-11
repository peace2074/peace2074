<script  setup>
const $q = useQuasar()
const $router = useRouter()
const menu_cat_elc = ref(false)
const menu_cat_tvs = ref(false)
const menu_cat_men = ref(false)
const text = ref('')
const dimensions = ref($q ? $q.screen : { height: 1000 })
const draggingFab = ref(true)
let fabPos = ref([18, 18])
const moveFab = (ev) => {
    draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
    fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos[1] - ev.delta.y];
}
const leftDrawer = ref(false)
</script>

<template>
    <q-layout view="lHh LpR lFf" style="font-family: Lato;">
        <q-header reveal elevated style="background-color:bg-primary">
            <q-toolbar v-if="!$q.platform.is.desktop" class="q-py-sm">
                <q-space />
                <div class="row">
                    <div class="col-sm-12 col-xs-12">
                        <q-toolbar-title class="bg-primary">
                            <nuxt-link to="/">
                                <img class="cursor-pointer float-left" src="/images/logo.png" style="width: 12%" />
                            </nuxt-link>
                            <span class="float-left q-mt-xs q-ml-md text-h6 text-weight-bold" style="font-size: 17px;">Peace
                                Shopping</span>
                        </q-toolbar-title>
                    </div>

                    <div class="col-sm-12 col-xs-12 q-mt-md">
                        <q-input class="float-left q-mx-md full-width sm" square bg-color="white" dense outlined
                            v-model="text" label="Search for products, brands and more" />
                    </div>
                    <div class="col-sm-12 col-xs-12 q-mt-md">
                        <div>
                            <q-btn class="q-mr-md" dense round flat fab-mini icon="shopping_cart">
                                <q-badge color="red" class="text-bold" floating transparent>
                                    4
                                </q-badge>
                            </q-btn>
                            <q-btn flat round dense icon="settings" class="q-mr-md" />
                            <q-btn flat round dense icon="fas fa-sign-out-alt" to="/" />
                        </div>
                    </div>
                </div>
                <!--          <q-btn @click="left = !left" flat round dense icon="menu" class="q-mr-sm" />-->
            </q-toolbar>
            <q-toolbar v-if="$q.platform.is.desktop" class="q-py-sm">
                <!--          <q-btn @click="left = !left" flat round dense icon="menu" class="q-mr-sm" />-->
                <img @click="$router.push('/')" class="cursor-pointer" src="/images/logo.png" style="width: 3%" />
                <q-toolbar-title>
                    <span class="float-left q-mt-xs text-h6 text-weight-bold" style="font-size: 17px;">Peace Shopping</span>
                    <q-input class="float-left st-md" style="width: 650px;" square bg-color="white" dense outlined
                        v-model="text" label="Search for products, brands and more" />
                </q-toolbar-title>

                <q-btn class="q-mr-md" dense round flat icon="shopping_cart">
                    <q-badge color="red" class="text-bold" floating transparent>
                        4
                    </q-badge>
                </q-btn>
                <q-btn flat round dense icon="settings" class="q-mr-md" />
                <q-btn flat round dense icon="fas fa-sign-out-alt" to="/" />

            </q-toolbar>
            <div class="gt-sm">
                <div class="bg-white text-grey-9 text-weight-bold shadow-transition">
                    <div class="row text-center items-center" :style="$q.platform.is.desktop ? 'height: 38px' : ''">
                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 cursor-pointer hover-blue"
                            @mouseover="menu_cat_elc = true">
                            Electronics
                            <q-menu fit @mouseleave="menu_cat_elc = false" v-model="menu_cat_elc"
                                transition-show="flip-right" transition-hide="flip-left">
                                <q-list dense class="text-grey-9 text-caption">
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Mobiles</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Laptops</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Health Care Appliances</q-item-section>
                                    </q-item>
                                    <!--<q-separator/>-->
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Speakers</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push('/category')" clickable>
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
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Television</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Air Conditioners</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Health Care Appliances</q-item-section>
                                    </q-item>
                                    <!--<q-separator/>-->
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Shop By Screen Size</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push('/category')" clickable>
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
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Footwear</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push('/category')" clickable>
                                        <q-item-section>Clothing</q-item-section>
                                    </q-item>
                                    <q-item @click="$router.push('/category')" clickable>
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
            <div class="lt-sm">
                <q-btn flat dense roundn icon="menu" @click="leftDrawer = !leftDrawer"></q-btn>
            </div>
        </q-header>
        <q-footer reveal elevated style="background-color:bg-primary">
            <div class="flex">
                <div class="q-mt-sm col justify-center align-between">
                    <div class="text-subtitle1 text-weight-bold">About</div>
                    <div class="text-caption hover_underline_white q-mt-sm">Contact us</div>
                    <div class="text-caption hover_underline_white">About Us</div>
                    <div class="text-caption hover_underline_white">Careers</div>
                    <div class="text-caption hover_underline_white">Our Stories</div>
                    <div class="text-caption hover_underline_white">Press</div>
                </div>
                <div class="q-mt-sm col justify-center align-between wrap">
                    <div class="text-subtitle1 text-weight-bold">Connect</div>
                    <div class="text-caption hover_underline_white q-mt-sm">Facebook</div>
                    <div class="text-caption hover_underline_white">Instagram</div>
                    <div class="text-caption hover_underline_white">Twitter</div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white">
                    <div class="text-subtitle1 text-weight-bold">Policy</div>
                    <div class="text-caption hover_underline_white q-mt-sm">Return Policy</div>
                    <div class="text-caption hover_underline_white">Terms Of Use</div>
                    <div class="text-caption hover_underline_white">Security</div>
                    <div class="text-caption hover_underline_white">Privacy</div>
                    <div class="text-caption hover_underline_white">Sitemap</div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-white">
                    <div class="text-subtitle1 text-weight-bold">Help</div>
                    <div class="text-caption hover_underline_white q-mt-sm">Payments</div>
                    <div class="text-caption hover_underline_white">Shipping</div>
                    <div class="text-caption hover_underline_white">Cancellation & Returns</div>
                    <div class="text-caption hover_underline_white">FAQ</div>
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
