import { Notify } from 'quasar'
import { NoteAcionsE } from '../types/index'
import type {
  notifyDefaults,
} from '~/static/index'
import {
  defaultStyles,
} from '~/static/index'

function note(action: typeof NoteAcionsE, payload: string[] | number | object, notifyDefaults: any) {
  return Notify.create({ type: action, message: payload, notifyDefaults })
}
note.show = function (message: string, style: string, config?: typeof notifyDefaults) {
  const newStyle = style in defaultStyles ? defaultStyles[style] : defaultStyles.success
  Object.assign(newStyle, config)
  const payload = { message, ...newStyle }
  return Notify.create(payload)
}

note.success = (message: string, config?: typeof notifyDefaults) => note.show(message, NoteAcionsE.success, config)

note.info = (message: string, config?: typeof notifyDefaults) => note.show(message, NoteAcionsE.Info, config)

note.warning = (message: string, config?: typeof notifyDefaults) => note.show(message, NoteAcionsE.warning, config)

note.error = (error: any, config = {}) => {
  const { status, statusCode, errorMessage, message, statusMessage } = error
  // const errorMsg = message || errorMessage || statusMessage || 'Undandled Error!'
  if (statusCode || errorMessage || message || statusMessage) {
    note.show(statusCode || errorMessage || message || statusMessage, NoteAcionsE.Errror, {

      caption: status || statusCode,
      type: NoteAcionsE.Errror,
      ...config,
    })
  }
}
note.log = (...args: any) => console.log(...args)
note.debug = (title: string, err: { message: string }) => {
  if (err && err.message)
  // eslint-disable-next-line no-console
    console.log(title, JSON.stringify(err.message || {}, null, 2))
  else if (err)
  // eslint-disable-next-line no-console
    console.log(title, JSON.stringify(err || {}, null, 2))
  else
  // eslint-disable-next-line no-console
    console.log(title)
}

export default function useNote() {
  return {
    note,
  }
}
