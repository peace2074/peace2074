<script setup lang="ts">
import { ref, watch } from 'vue';
const router = useRouter()
const checkbox = ref(true);
const loginUser = ref({ username: '', password: '' })

</script>

<template>
    <v-row class="d-flex mb-3">
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Username</v-label>
            <v-text-field variant="outlined" hide-details v-model="loginUser.username" color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Password</v-label>
            <v-text-field variant="outlined" type="password" hide-details v-model="loginUser.password"
                color="primary"></v-text-field>
        </v-col>
        <v-col cols="12" class="pt-0">
            <div class="d-flex flex-wrap align-center ml-n2">
                <v-checkbox v-model="checkbox" color="primary" hide-details>
                    <template v-slot:label class="text-body-1">Remeber this Device</template>
                </v-checkbox>
                <div class="ml-sm-auto">
                    <NuxtLink to="/" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">
                        Forgot
                        Password ?</NuxtLink>
                </div>
            </div>
        </v-col>
        <v-col cols="12" class="pt-0">
            <v-btn color="primary" size="large" block flat>Sign in</v-btn>
        </v-col>
        <v-col cols="12" class="pt-0">
            <v-btn color="black" size="large" block flat>Sign in with GitHub</v-btn>
        </v-col>
    </v-row>
</template>
