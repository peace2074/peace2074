import en from "../locales/enUs.json";
import he from "../locales/heIl.json";
import ar from "../locales/arIl.json";

export type heIlT = typeof he;
export type arIlT = typeof ar;
export type enUsT = typeof en;
let me = {
  en,
  ar,
  he,
};
export type MessagesT = typeof me;

export const messages: MessagesT = me;

export { en };
export { ar };
export { he };
export default messages;
