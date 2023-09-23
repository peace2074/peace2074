import { _get } from "waelio-utils"
import { SuraI } from "~/types"
import { _ } from 'lodash'

const { note } = useNote()
const quran: SuraI[] = []
let legends: string[] = []
let loading = false
let size = 0
const sanetize = (payload: SuraI[]) => {
  return _get(_get(payload))
}
export const useQuran = () => {
  const noLocalCach = quran && quran.length && quran.length === 14;
  const fetchData = () => {
    loading = true

    useFetch<SuraI[]>('/api/quran')
      // @ts-ignore
      .then(async (res) => {
        size = res.Size;
        quran.push(sanetize(res.quran))
        console.log(await res.Size);
        legends = await res.legend

        loading = false
        note.success('quran successfuly loaded ...')
        return quran
      })
      .catch(error => {
        note.log(error);
        note.error(error)
        loading = false
      })


  }
  return {
    start: fetchData,
    quran,
    loading,
    legends
  }


}

export default useQuran