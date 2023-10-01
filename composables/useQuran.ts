import { _get } from 'waelio-utils'
import { SuraI } from '~/types'
import { core } from '~/utils/core'

enum storageE {
  quran = 'Quran',
  size = 'Size',
  legend = 'Legend',
}
interface LegendT {
  index: number
  name: string
}
const { note } = useNote()

export function useQuran() {
  let loading = false
  const _quran: Ref<object[]> = ref([])
  const _size: Ref<number | string> = ref('114')
  const _legends: Ref<LegendT[]> = ref([])
  const fetchData = async () => {
    loading = true
    const { data, error } = await useFetch('/api/quran', { lazy: false })
    setTimeout(async () => {
      if (data && data.value) {
        const nr = await data.value?.data
        _size.value = nr.Size
        core.setItem(storageE.size, nr.Size)
        _quran.value = nr.Quran
        core.setItem(storageE.quran, nr.Quran)
        _legends.value = nr.Legend
        core.setItem(storageE.legend, nr.Legend)
        // note.success('data loaded succsessfuly')
        return _quran.value
      }
      if (error)
        note.error(error)
    }, 2000)
  }
  return {
    start: fetchData,
    loading,
    _enums: storageE,
    _quran,
    _size,
    _legends,
  }
}
