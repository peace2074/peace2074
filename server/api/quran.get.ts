import type { H3Event } from 'h3'
import holybook from '../db/static/quran'
import type { SuraI } from '~/types'

export default defineEventHandler((event: H3Event) => {
  const query = getQuery(event)
  const _Size: number = holybook.length
  const Data: SuraI[] = holybook
  const names = () => Data.map((one: SuraI ) => ({
    index: +one.index,
    name: one.name,
  }))

  return {
    data: {
      Quran: holybook,
      Size: _Size,
      Legend: names(),
      Query: query
    }
  }
})
