import en from "../locales/enUs.json";
import he from "../locales/heIl.json";
import ar from "../locales/arIl.json";

export type heIlT = typeof he;
export type arIlT = typeof ar;
export type enUsT = typeof en;
export type MessagesT = {
  en: enUsT;
  ar: arIlT;
  he: heIlT;
};

export const messages: MessagesT = { en, he, ar };

export { en };
export { ar };
export { he };
export default messages;
