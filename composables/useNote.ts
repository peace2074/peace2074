import { NoteAcionsE, type NoteActionsI } from "../types/index";

import {
  defaultStyles,
  notifyDefaults,
  notifyDefaults as nfd,
} from "~/static/index";
import { Notify } from "quasar";
function note(
  action: NoteActionsI,
  payload: string,
  notifyDefaults?: typeof nfd
) {
  return Notify.create({ type: action, message: payload, notifyDefaults });
}
note.show = function (
  message: string,
  style: string,
  config?: typeof notifyDefaults
) {
  // @ts-ignore
  const newStyle: StyleT =
    style in defaultStyles ? defaultStyles[style] : defaultStyles.success;
  Object.assign(newStyle, config);
  const payload = { message, ...newStyle };
  return Notify.create(payload);
};
const success = NoteAcionsE.success;
note.success = (message: string, config?: typeof notifyDefaults) =>
  note.show(message, success as string, config);

note.info = (message: string, config?: typeof notifyDefaults) =>
  note.show(message, NoteAcionsE.Info, config);

note.warning = (message: string, config?: typeof notifyDefaults) =>
  note.show(message, NoteAcionsE.warning, config);

note.error = (error: any, config = {}) => {
  const { status, statusCode, errorMessage, message, statusMessage } = error;
  // const errorMsg = message || errorMessage || statusMessage || 'Undandled Error!'
  if (statusCode || errorMessage || message || statusMessage) {
    note.show(
      statusCode || errorMessage || message || statusMessage,
      NoteAcionsE.Errror,
      {
        // @ts-ignore
        caption: status || statusCode,
        type: NoteAcionsE.Errror,
        ...config,
      }
    );
  }
};
note.log = (...args: any) => console.log(...args);
note.debug = (title: string, err: { message: string }) => {
  if (err && err.message)
    // eslint-disable-next-line no-console
    console.log(title, JSON.stringify(err.message || {}, null, 2));
  else if (err)
    // eslint-disable-next-line no-console
    console.log(title, JSON.stringify(err || {}, null, 2));
  // eslint-disable-next-line no-console
  else console.log(title);
};

export { note };
export const useNote = () => {
  return {
    note,
  };
};
