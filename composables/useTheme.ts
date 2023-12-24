import { appThemeCookieName, modeDark, modeLight } from '~/constants'

export default function useTheme() {
  const enabled = useState<boolean | null>(appThemeCookieName, () => null)

  onMounted(() => {
    enabled.value = localStorage.getItem(appThemeCookieName) === modeDark
  })

  const toggleTheme = () => {
    enabled.value = !enabled.value
    localStorage.setItem(appThemeCookieName, enabled.value ? modeDark : modeLight)
    setTheme()
  }

  function setTheme() {
    const theme = localStorage.getItem(appThemeCookieName)
    if (theme === modeDark || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', modeDark)
      enabled.value = true
    }
    else {
      document.documentElement.removeAttribute('data-theme')
      enabled.value = false
    }
  }

  return {
    enabled,
    toggleTheme,
    setTheme,
  }
}
