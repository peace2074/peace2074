<script lang="ts" setup>
import { useUserStore } from '~/stores/user'
import { rootStore } from '~/stores/root'
import type { ProductI } from '~/types'
const userStore = useUserStore()
const products: Ref<ProductI[]> = ref([])
const $router = useRouter()
const slide = ref("style")
const trending_slide = ref('')
const latest_slide = ref('')
const zipCode = ref(null)
const discount = ref(1.2)
onMounted(async () => {
  // @ts-ignore
  const { data } = await $fetch('/api/prisma/get-all-products') as Promise<ProductI[] | unknown | null>
  if (await data && await data.length) {
    products.value = data as ProductI[]
    trending_slide.value = products.value[1].title
    latest_slide.value = products.value[3].title
    rootStore().$state.products = data
    setTimeout(() => userStore.isLoading = false, 1000)
  }
})
</script>

<template>
  <q-page class="q-mt-sm">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
        <!-- first carousel -->
        <q-carousel :class="$q.platform.is.desktop ? 'q-ml-sm' : ''" arrows animated v-model="slide" height="250px">
          <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="text-subtitle1">First stop</div>
              <div class="text-caption">Mountains</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="text-subtitle1">Second stop</div>
              <div class="text-caption">Famous City</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="text-subtitle1">Third stop</div>
              <div class="text-caption">Famous Bridge</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
        <!-- Collect Address -->
        <q-card class="bg-white q-pt-sm" :class="$q.platform.is.desktop ? 'q-mr-sm' : ''">
          <img :src="`https://unsplash.com/photos/man-in-green-jacket-walking-on-sidewalk-during-daytime-BTKF6G-O8fU`"
            style="margin:auto;width:66%;" />
          <q-card-section class="q-pt-xs">
            <div class="text-caption text-center text-grey-7">Your Delivery Pincode</div>
            <div class="text-caption text-center q-mt-sm text-grey-9">
              Enter your pincode to check availability and faster options
            </div>
            <div class="q-mt-sm">
              <q-input dense outlined v-model="zipCode" placeholder="Enter pincode"></q-input>
            </div>
            <div class="q-mt-xs">
              <div style="display:block; height:22px;">
                <q-btn size="sm" label="Save" class="q-mt-xs text-capitalize bg-primary text-white float-right" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- Latest Lancunches -->
    <div class="text-grey-9 text-weight-bold">
      <div class="row items-center q-mx-sm">
        <div class="col-12 q-mt-sm">
          <div class="q-pl-md bg-white q-pt-sm ">
            <span class="text-grey-9 text-h6 text-weight-bold">Latest Launches</span>
            <a class="text-primary q-ml-sm cursor-pointer">[see all]</a>
          </div>
          <q-carousel v-model="latest_slide" v-if="products" transition-prev="slide-right" transition-next="slide-left"
            swipeable animated control-color="primary" navigation padding arrows height="260px" class="rounded-borders">
            <q-carousel-slide v-for="product in products" :key="product._id" :name="product.title" :img-src="product.url"
              class="column no-wrap">
              <q-image :src="product.url" :srcSet="product.url" :placeholderSrc="product.title" />
              <q-btn class="q-mt-md text-center" :title="product.title" :href="`/item/${product._id}`">
                <q-image :ratio="1" :src="product.url" :srcSet="product.url" :placeholderSrc="product.title" />
                <div @click="$router.push('/details')"
                  class="col-lg-2 col-md-2 col-sm-12 col-xs-12 hover_border_grey text-center full-height">
                  <q-img style="" class="rounded-borders"
                    src="https://www.graphicsprings.com/filestorage/stencils/d3dd5cb632e0826d9e6136af3241b28e.png">
                  </q-img>
                  <div>{{ product.title }}</div>
                  <div class="text-caption text-weight-bold text-green">{{ product.description }}</div>
                  <div>
                    <span>{{ product.price }}</span><span class="q-ml-sm text-grey-6"
                      style="text-decoration: line-through">{{ product.price * discount }}</span>
                  </div>
                </div>
              </q-btn>

            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="row items-center q-mx-sm">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mt-sm">
          <div class="q-pl-md bg-white q-pt-sm">
            <span class="text-grey-9 text-h6 text-weight-bold">Trending in</span>
            <a class="text-primary q-ml-sm cursor-pointer">[see more]</a>
          </div>
          <q-carousel v-model="trending_slide" transition-prev="slide-right" transition-next="slide-left" swipeable
            animated control-color="primary" navigation padding arrows height="260px" class="rounded-borders">
            <q-carousel-slide v-for="product in products" :key="product._id" :name="product.title" :img-src="product.url"
              class="column no-wrap">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img @click="$router.push(`/item/${product._id}`,
                  params: {
                  id: product._id
                }
                )" style="border:1px solid lightgrey;"
                  class="rounded-borders col-lg-3 col-md-3 col-sm-12 col-xs-12 cursor-pointer full-height"
                  :src="product.url" :srcSet="product.url" :placeholderSrc="product.title">
                  <div class="absolute-bottom custom-caption" style="background-color:rgba(0, 0, 0, .5);">
                    <div class="text-caption text-weight-bolder">{{ product.title }}</div>
                  </div>
                </q-img>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
      <div class="row q-mt-sm q-mx-sm bg-white text-center">
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="border-right: 1px solid lightgrey"></div>
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="border-right: 1px solid lightgrey">
          <q-img src="https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png"></q-img>
          <div class="text-subtitle1 q-mb-sm text-grey-8">100% Secure Payments</div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="border-right: 1px solid lightgrey">
          <q-img src="https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png"></q-img>
          <div class="text-subtitle1 q-mb-sm text-grey-8">Trustpay</div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="border-right: 1px solid lightgrey">
          <q-img src="https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png"></q-img>
          <div class="text-subtitle1 q-mb-sm text-grey-8">Help Center</div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="border-right: 1px solid lightgrey">
          <q-img src="https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png"></q-img>
          <div class="text-subtitle1 q-mb-sm text-grey-8">Shop On The Go</div>
        </div>
      </div>
    </div>
  </q-page>
</template>


<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 8px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
