export function useMode() {
  const color = useColorMode()
  const $q = useQuasar()

  const light = 'light'
  const dark = 'dark'
  const isDark = computed(() => color.value === dark)
  const isLight = computed(() => color.value === light)
  function toggle() {
    color.preference = color.value === light ? dark : light
  }
  function setMode(m: string) {
    color.preference = color.value = m === light ? light : dark
    $q.dark.set(isDark)
  }

  return {
    color,
    toggle,
    isDark,
    isLight,
    setMode,
  }
}
