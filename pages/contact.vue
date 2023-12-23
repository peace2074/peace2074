<script lang="ts">
import { useRouter } from 'vue-router'
import { computed, onMounted, reactive, ref, unref } from '#imports'

import { projects } from '~/static'

export default {
  setup() {
    const router = useRouter()
    const { t } = useI18n()
    const myProjects = reactive(projects)
    const accept = ref(false)
    const user_email = ref('')
    const message = ref('')
    const form_valid = ref(false)
    const personal_name = ref('')
    const project_name = ref('Waelio.com')
    const user_name = ref('')
    const to_name = ref('')
    const reply_to = ref('')
    const emailjs_service = ref(import.meta.env.VITE_EMAIL_SERVICE as string)!
    const emailjs_template = ref(import.meta.env.VITE_EMAIL_TEMPLATE as string)!
    const emailjs_user = ref(import.meta.env.VITE_EMAIL_USER as string)
    const onReset = (): boolean => {
      form_valid.value = false
      accept.value = false
      message.value = ''
      user_email.value = ''
      personal_name.value = ''
      project_name.value = ''
      user_name.value = ''
      to_name.value = ''
      reply_to.value = ''
      return true
    }
    const isReadyForm = computed(() => {
      return !!(
        user_name.value
        && user_email.value
        && project_name.value
        && accept.value
        && message.value
      )
    })
    const filtered_Project = computed(() => {
      const { target } = unref(router.currentRoute).query
      if (target) {
        project_name.value = target.toString()
        return myProjects.filter(item => item.key === target)
      }

      return myProjects
    })
    const isEmptyForm = computed(() => {
      return (
        !user_name.value
        && !user_email.value
        && !project_name.value
        && !accept.value
        && !message.value
      )
    })
    const emailBody = computed(() => {
      return {
        user_name: user_name.value,
        user_email: user_email.value,
        project_name: project_name.value,
        message: message.value,
        reply_to: user_email.value,
      }
    })
    const onSubmit = () => {
      emailjs.send(
        emailjs_service.value,
        emailjs_template.value,
        emailBody.value,
        emailjs_user.value,
      )
        .then(() => {
          // eslint-disable-next-line no-alert
          alert('Message Was set successfully.')
          onReset()
          return true
        })
        .catch((exception: object) => {
          console.error(exception)
          return exception
        })
      return true
    }
    onMounted(() => {
      emailjs.init(emailjs_user.value as string) as void
    })
    const siteData = reactive({
      title: 'Peace2074 | Contact Us',
      description: 'Contact US for any questions,support or concerns.',
      keywords: 'logo, basic, cb, php, mysql, python, javascript, mssql',
    })
    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: 'description',
          content: computed(() => siteData.description),
          keywords: computed(() => siteData.keywords),
        },
      ],
    })

    return {
      myProjects,
      t,
      accept,
      emailjs_user,
      user_email,
      user_name,
      project_name,
      message,
      form_valid,
      onSubmit,
      onReset,
      isReadyForm,
      isEmptyForm,
      emailBody,
      filtered_Project,
    }
  },
}
</script>

<template>
  <q-page padding class="q-mt-xl mx-auto container">
    <h1 class="text-h2">
      {{ t('button.Contact') }}
    </h1>
    <div class="mx-auto">
      <div class="py-lg">
        <div class="text-h4 text-center">
          {{ t('contact.form.title') }}
        </div>
        <div class="text-h6 text-center">
          {{ t('contact.form.caption') }}
        </div>
      </div>
      <div class="form-container mx-auto p-4">
        <form id="contactForm" ref="contactForm" class="form mx-auto flex flex-col">
          <!-- User Name -->
          <div class="form-group mx-auto my-2 h-22 w-72 rounded p-1 lg:w-96">
            <label for="user_name">{{ t('contact.form.name.label') }}</label>
            <input id="user_name" v-model="user_name" name="full_name" :placeholder="t('contact.name.placeholder')">
          </div>
          <!-- User Email -->
          <div class="form-group mx-auto my-2 h-22 w-72 rounded p-1 lg:w-96">
            <label for="user_email">{{ t('contact.form.email.label') }}</label>
            <input
              id="user_email" v-model="user_email" filled name="email" type="email"
              :placeholder="t('contact.form.email.placeholder')"
            >
          </div>
          <!-- Project Selector -->
          <div class="form-group mx-auto my-2 h-22 w-72 rounded p-1 lg:w-96">
            <label for="project_name">{{ t('contact.projects.label') }}</label>
            <select
              id="project_name" v-model="project_name" name="project_name"
              :placeholder="t('contact.projects.placeholder')"
            >
              <option v-for="item in filtered_Project" :key="item.key" :value="item.key" :selected="item.selected">
                {{ item.value }}
              </option>
            </select>
          </div>
          <!-- Message Body -->
          <div class="form-group mx-auto my-2 h-30 w-72 rounded p-1 lg:w-96">
            <label for="user_message">{{ t('contact.form.message.label') }}</label>
            <textarea
              id="user_message" v-model="message" type="textarea" name="message" min-height="5rem"
              max-height="10rem" :placeholder="t('contact.form.message.placeholder')"
            />
          </div>
          <!-- Accept Terms -->
          <div
            class="form-group mx-auto my-2 h-11 w-72 rounded p-1 lg:w-96"
            :style="accept ? 'background-color:green' : 'background-color:transparent'" @click="accept = accept"
          >
            <button
              type="button"
              :style="accept ? 'background-color:green;color:white' : 'background-color:transparent;color:red'"
              style="outline:none!important"
              class="block cursor-pointer border-none pt-1 text-size-xs font-semibold outline-none"
              @click="accept = !accept"
            >
              {{ t('contact.form.acceptterms') }}
            </button>
          </div>
          <!-- Navigate to Terms -->
          <p>
            <router-link to="terms" class="full-width text-bold block h-10">
              {{ t('contact.form.acceptterms') }}
            </router-link>
          </p>
          <!-- Actions Container -->
          <div class="w-full flex content-between justify-around px-lg">
            <button
              class="block h-10 w-30 rounded bg-gray-500 text-white" name="send" :alt="t('button.submit')"
              :disabled="!isReadyForm" :style="isReadyForm ? 'background-color: green' : 'background-color:red'"
              :disable="!isReadyForm" @click.prevent="onSubmit()"
            >
              {{ t('button.submit') }}
            </button>
            <button class="Button p block h-10 w-30 rounded bg-gray-500 text-white" :alt="t('button.reset')" type="reset">
              {{ t('button.reset') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  border: 0.1rem solid rgba(180, 180, 180, 0.671);
}

.form-group textarea,
.form-group select,
.form-group select option,
.form-group input {
  --tw-shadow-color: 107, 114, 128;
  --tw-shadow: 0 1px 2px 0 rgba(var(--tw-shadow-color), 0.05);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border: 0.1rem solid lightgray;
  height: 3em;
  text-indent: 0.5em;
  background-color: transparent;
}

option {
  background-color: transparent;
  color: black;
}

.form {
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-content: center;
  justify-content: flex-center;
  align-items: center;
}

.form-select {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.form-control:focus,
.form-control:not(:placeholder-shown),
.form-select label {
  opacity: 1;
}
</style>
