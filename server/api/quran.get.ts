import type { H3Event } from 'h3'
import holybook from '../db/static/quran'
import type { SuraI } from '~/types'

export default defineEventHandler((event: H3Event) => {
  const query = getQuery(event)
  const index: number = +query?.index || 0
  const _Size: number = holybook.length || 114
  const legitIndex: boolean = _Size>index<0
  const Data: SuraI[] = legitIndex ? holybook[index - 1] : holybook
  const names = () => Data.map((one: SuraI) => ({
    index: +one.index,
    name: one.name,
  }))

  return {
    Quran: holybook,
    Size: _Size,
    Legend: names(),
  }
})
