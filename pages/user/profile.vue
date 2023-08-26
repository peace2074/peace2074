<script setup>
const { useAuthUser } = useAuth();
const user = useAuthUser();
</script>
<template>
  <NuxtLayout name="default">
    <div class="user-settings full-width" v-if="currentUser">
      <q-form class="full-height" >
        <div class="background-photo">
          <div class="default-background" >
            <q-img
              src="https://cdn.quasar.dev/img/material.png"
              style="height: 200px"
              @click="showPhotoUpload('background')"
            />
          </div>
          
        </div>
        <div class="absolute-top q-mt-sm text-white text-center">
          <q-icon
            class="q-mr-sm"
            color="white"
            name="edit"
            size="20px"
            
          >
          </q-icon
          >Edit your background image
        </div>
        
            <q-avatar
              class="q-mb-sm"
              round="round"
              color="blue-grey-10"
              icon="person"
              font-size="110px"
              size="180px"
              text-color="white"
            >
            </q-avatar>
            <span class="text-caption text-blue-grey-10"> Click to edit </span>
            <q-avatar
              class="q-mb-sm shadow-5"
              size="180px"
              
            >
              <q-img :src="currentUser.profileImage"></q-img>
            </q-avatar>
            <span class="text-blue-grey-10">
              <q-icon class="q-mr-sm" color="blue-grey-10" name="edit" size="16px">
              </q-icon>
              Click to edit
            </span>
          
        
        <section class="user-info">
          <h6 class="q-mt-none q-mb-md text-center">Edit Your Profile</h6>
          <div class="row justify-between items-center q-mb-lg">
            <label class="col-3" for="fullName">Name</label>
            <q-input
              class="col"
              id="fullName"
              v-model="fullName"
              borderless="borderless"
              dense="dense"
              type="text"
            />
          </div>
          <div class="row justify-between items-center q-mb-lg">
            <label class="col-3" for="email">Email</label>
            <q-input
              class="col"
              id="email"
              v-model="currentUser.email"
              borderless="borderless"
              dense="dense"
              type="text"              
            />
          </div>
          <div class="row justify-between items-center q-mb-lg">
            <label class="col-3" for="mobile">Mobile</label>
            <q-input
              class="col"
              id="mobile"
              v-model="currentUser.mobile"
              borderless="borderless"
              dense="dense"
              hint="+1(###) ###-####"
              mask="+#(###) ###-####"
              type="text"
            />
          </div>
        </section>
        
          <q-btn
            color="primary"
            label="CANCEL"
            style="min-width: 6em"
            
          />
          <q-btn color="primary" type="submit" label="SAVE" style="min-width: 6em" />
        
      </q-form>
      <q-dialog
        v-model="photoUpload"
        transition-hide="scale"
        transition-show="scale"
        @before-hide="resetPhotoType"
      >
        <FirebaseUploader
          class="q-my-lg"
          label="Please Upload a Photo"
          color="primary"
          square
          :meta="meta"
          :prefixPath="prefixPath"
          @uploaded="uploadComplete"
          auto-upload
          accept=".jpg, image/*"
          flat
          bordered
          style="max-width: 300px"
        />
      </q-dialog>
    </div>
  </NuxtLayout>
</template>

<script>
const { useAuthUser } = useAuth();
const user = useAuthUser();
const fullName = computed(()=> user.value.first_name+' ' + user.value.last_name)


const currentUser = user;
</script>
<style lang="scss"></style>
