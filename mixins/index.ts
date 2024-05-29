import { useDark, useToggle } from '@vueuse/core'
import { computed } from '#imports'
export const isDark = useDark()
export { useToggle }

export const modes = computed(() => {
  return [
    { key: 0, value: 'auto', label: 'auto' },
    { key: 1, value: 'true', label: 'dark' },
    { key: 2, value: 'false', label: 'light' },
  ]
})

export const autoStyle = computed(() => {
  return isDark.value
    ? 'background-color:bg-dark;color:text-light;'
    : 'background-color:bg-light;color:text-dark;'
})

export const autoClass = computed(() => {
  return isDark.value ? 'mode-dark' : 'mode-light'
})

export const autoColor = computed(() => {
  return isDark.value ? '$dark' : '$light'
})

export const modesKeys = computed(() => {
  return modes.value.map(mode => mode.value)
})

export const modesLabelOptions = computed(() => {
  return modes.value.map(mode => ({
    label: mode.label,
    value: mode.value,
  }))
})

export default {
  data() {
    return {
      modes,
    }
  },
  computed: {
    c_modes() {
      return modes.value
    },
  },
}
