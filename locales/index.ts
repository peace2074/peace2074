import en from "../locales/enUs";
import he from "../locales/heIl";
import ar from "../locales/arIl";
import type { heIlT } from "../locales/heIl";
import type { arIlT } from "../locales/arIl";
import type { enUsT } from "../locales/enUs";
export type MessagesT = {
  en: enUsT;
  ar: arIlT;
  he: heIlT;
};

export const messages: MessagesT = { en, he, ar };
export default messages;
export type { heIlT };
export type { arIlT };
export type { enUsT };
