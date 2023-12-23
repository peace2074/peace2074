import enUS from '../locales/enUs.json'
import heIL from '../locales/heIl.json'
import arIL from '../locales/arIl.json'

export type arIlT = typeof arIL
export type heIlT = typeof heIL
export type enUsT = typeof enUS

const me = {
  arIL,
  enUS,
  heIL,
}
export type MessagesT = typeof me

export const messages: MessagesT = me

export { arIL }
export { enUS }
export { heIL }

export default messages
