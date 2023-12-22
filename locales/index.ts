import enUS from "../locales/enUs.json";
import heIL from "../locales/heIl.json";
import arIL from "../locales/arIl.json";

export type heIlT = typeof heIL;
export type arIlT = typeof arIL;
export type enUsT = typeof enUS;
let me = {
  enUS,
  arIL,
  heIL,
};
export type MessagesT = typeof me;

export const messages: MessagesT = me;

export { enUS };
export { arIL };
export { heIL };
export default messages;
