export type TKey = number;
export type TColor = string;
export type TName = string;
export type TLink = string;
export type TYear = string;
export type TText = string;
export type TValue = string;
export type TDescription = string;

export interface Window {
  Etherium: any;
  web3: any;
}
/** User Roles from casl */
export interface IRole {
  name: TName;
  subject: TName;
  actions: TName[];
  inverted?: boolean;
  conditions?: TName[];
  fields?: TName[];
  reason?: TName;
}

/** Loght Modes */
export enum LightModes {
  Dark = "dark",
  Light = "light",
  System = "auto",
}

/** Enum Note Actions */
export enum ENoteAcions {
  Show = "show",
  Hide = "hide",
  success = "success",
  Info = "info",
  warning = "warning",
  Errror = "error",
  Loading = "loading",
}
/** Loding Defaults */
export type TLoadingDefaults = {
  spinner: string;
  message: string;
};
/** Notify Positions */
export enum EPOSITIONS {
  top = "top",
  topRight = "top-right",
  topLeft = "top-left",
  bottom = "bottom",
  bottomRight = "bottom-right",
  bottomLeft = "bottom-left",
  right = "right",
  left = "left",
  center = "center",
}
/** Education History interface */
export interface IHistory {
  key: TKey;
  color: TColor;
  name: TName;
  link: LINK;
  year: TYear;
  text: string;
}
/** Project interface */
export interface IProject {
  key: string;
  value: TValue;
  selected: boolean;
}
export interface ISponsor {
  name: string;
  img: string;
  url: string;
}
export interface IWorkOptions {
  name?: "SHA-256" | "PBKDF2";
  encode?: "base64" | "utf8" | "hex";
  salt?: any;
  hash?: string;
  length?: number;
}
/** Authentication Strategies */
export enum ENetworksNames {
  google = "google",
  facebook = "facebook",
  twitter = "twitter",
  local = "local",
  passport = "passport",
}

/** Social login user scopes */
export enum EScopesNames {
  profile = "profile",
  social = "social",
  email = "email",
  fullname = "fullname",
}
/** Social login scope */
export interface IScope {
  name?: string;
  network: Partial<ENetworksNames>;
  scope: Partial<EScopesNames>;
  icon?: string;
  emitName?: string | Function;
}
export type TScope = IScope;

export interface IHARF {
  name: string;
  weight: number;
  value: string;
  description?: string;
  color?: string;
  encoding?: string;
}
export interface IkALEMAT {
  horuf: IHARF[];
}
export interface IAYA {
  Kalemat: IkALEMAT[];
}
export interface ISURA {
  Ayat: IAYA[];
}
export interface IQuran {
  Surah: ISURA[];
}
export interface ISTATE {
  quran: IQuran;
  Surah: ISURA[];
  Index: IQuran;
}

export interface IQ2B {
  state: ISTATE;
}
export interface LINK {
  text: string;
  icon: string;
}

export interface IHistory {
  key: TKey;
  color: TColor;
  name: TName;
  link: LINK;
  year: TYear;
  text: string;
}
export interface IProjects {
  key: string;
  value: TValue;
  selected: boolean;
}
export type TProjects = IProjects;
export interface ISponsors {
  name: string;
  img: string;
  url: string;
}
export type TSponsors = ISponsors;
export interface TransactionInterface {
  addressFrom: string;
  addressTo: string;
  amount: number;
  message: string;
  keyword: string;
  timestamp: string;
  url?: string;
  gifUrl?: string;
  receiver: string;
  sender: string;
}
export type Transaction = TransactionInterface & {
  id?: string | number;
};
export type Transactions = Transaction[];

export interface UserI {
  id?: string;
  email: string;
  username: string;
  name?: string;
  handle?: string;
  password: string;
  first_name?: string;
  last_name?: string;
  profileImage?: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
  // Refresh token
  refreshToken?: object;

  //Auth0
  auth0Id?: string;

  // Tweet
  tweet?: object;
  // MediaFiles
  mediaFiles?: string[];
}
export type UserT = UserI;

export interface IPermession {
  id?: string;
  action: string | string[];
  subject: string | string[];
  fields?: string | string[];
  conditions?: string[];
  inverted?: boolean;
  reason?: string;
  permissionId: string;
  createdAt?: string;
  updatedAt?: string;
}
export type TPermession = IPermession;

export interface IToken {
  userId: string;
  iat: number;
  exp: number;
}
export type TToken = {
  id: string;
  token: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
};

export interface ISubscription {
  id: string;
  endpoint: string;
  expirationTime: string;
  keys_p256dh: string;
  keys_auth: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: object;
}

export type TReshreshToken = {
  id: string;
  token: string;
  userId: string;
  updatedAt?: Date;
  createdAt?: Date;
};

export interface ProductI {
  _id: string;
  title: string;
  description: string;
  price: number;
  url: string | string[];
}
export enum CaslActionE {
  CREATE = "create",
  READ = "read",
  UPDATE = "update",
  DELETE = "delete",
  MANAGE = "manage",
}
export enum CaslSubjectE {
  ALL = "all",
  ADMIN = "admin",
  CATEGORY = "category",
  LIKES = "likes",
  MEDIAFILE = "mediafile",
  PERMISSIONS = "permissions",
  POST = "post",
  ROLES = "roles",
  REFRESH_TOKEN = "reshresh_token",
  TWEET = "tweet",
  USER = "user",
}

// CASL
export type CaslActionsT =
  | CaslActionE.CREATE
  | CaslActionE.READ
  | CaslActionE.UPDATE
  | CaslActionE.DELETE;

export type CaslSubjectsT =
  | CaslSubjectE.CATEGORY
  | CaslSubjectE.LIKES
  | CaslSubjectE.MEDIAFILE
  | CaslSubjectE.PERMISSIONS
  | CaslSubjectE.POST
  | CaslSubjectE.ROLES
  | CaslSubjectE.TWEET
  | CaslSubjectE.USER
  | CaslSubjectE.ADMIN;

export interface CaslActionsI {
  actions: CaslActionsT;
}
export interface CaslSubjectsI {
  actions: CaslSubjectsT;
}

export enum eLangs {
  "en" = "enUS",
  "he" = "heIL",
  "ar" = "arIL",
}
export enum NoteAcionsE {
  Show = "show",
  Hide = "hide",
  success = "success",
  Info = "info",
  warning = "warning",
  Errror = "error",
  Loading = "loading",
}
export interface PwaInjection {
  /**
   * @deprecated use `isPWAInstalled` instead
   */
  isInstalled: boolean;
  /**
   * From version v0.3.5+.
   */
  isPWAInstalled: Ref<boolean>;
  showInstallPrompt: Ref<boolean>;
  cancelInstall: () => void;
  install: () => Promise<void>;
  swActivated: Ref<boolean>;
  registrationError: Ref<boolean>;
  offlineReady: Ref<boolean>;
  needRefresh: Ref<boolean>;
  updateServiceWorker: (reloadPage?: boolean | undefined) => Promise<void>;
  cancelPrompt: () => Promise<void>;
  getSWRegistration: () => ServiceWorkerRegistration | undefined;
}
