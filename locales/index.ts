import enUS from './en'
import heIL from './he'
import arIL from './ar'
import { _reParseString } from 'waelio-utils'
export type arIlT = typeof arIL
export type heIlT = typeof heIL
export type enUsT = typeof enUS

const me = {
  ar: JSON.stringify(arIL),
  en: JSON.stringify(enUS), 
  he: JSON.stringify(heIL),
}
export type MessagesT = typeof me

export const messages: MessagesT = me

export { arIL }
export { enUS }
export { heIL }

export default messages
