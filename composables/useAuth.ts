// @ts-nocheck
import type { JwtPayload } from "jwt-decode";
import type { UserI, UserT } from "~/types";
import { _isString, _isObject } from "waellio-utils";
export default () => {
  const useAuthToken = () => useState("auth_token") as Ref<JwtPayload>;
  const useAuthUser = () => useState("auth_user") as Ref<UserI>;
  const useAuthUsers = () => useState("auth_users") as Ref<UserI[]>;
  const useAuthLoading = () =>
    useState("auth_loading", () => true) as Ref<boolean>;

  const useUser = useState("user", () => {}) as unknown as Ref<UserI>;
  const getUser = () => {
    return useUser.value;
  };
  const setUser = (newUser: object) => {
    if (!newUser) return;
    switch (true) {
      case _isObject(newUser):
        useUser.value = { ...newUser };
        break;
      case _isString(newUser):
        useUser.value = newUser;
        break;
      default:
        useUser.value = newUser;
        break;
    }
  };
  const setToken = (newToken: unknown) => {
    const authToken: Ref<JwtPayload> = useAuthToken() as Ref<JwtPayload>;
    authToken.value = newToken as JwtPayload;
  };
  const login = ({
    username,
    password,
    provider,
  }: {
    username: string;
    password: string;
    provider?: string | boolean;
  }) => {
    if (!!provider && _isString(provider)) {
      return new Promise(async (resolve, reject) => {
        try {
          const data = hello(provider).login();
          console.log(data);
          return data;
          const { user, access_token } = data;
          if (user && access_token) {
            setToken(access_token);
            setUser(user as UserT);
            note.success("Successful login");
            resolve(true);
          } else {
            note.warning("Session expired, please login again.");
          }
        } catch (error) {
          note.error("Bad username or password");
          setIsAuthLoading(false);
          reject(error);
        }
      });
    } else {
      return new Promise(async (resolve, reject) => {
        try {
          const data = await $fetch("/api/auth/login", {
            method: "POST",
            body: {
              username,
              password,
            },
          });
          const { user, access_token } = data;
          if (user && access_token) {
            setToken(access_token);
            setUser(user as UserT);
            note.success("Successful login");
            resolve(true);
          } else {
            note.warning("Session expired, please login again.");
          }
        } catch (error) {
          note.error("Bad username or password");
          setIsAuthLoading(false);
          reject(error);
        }
      });
    }
  };

  const setUsers = (newUser: UserI[]) => {
    const authUsers = useAuthUsers();
    authUsers.value = [...newUser] as UserT[];
  };

  const setIsAuthLoading = (value: boolean) => {
    const authLoading = useAuthLoading();
    authLoading.value = value;
  };

  type RegisterUser = {
    username: string;
    user_email: string;
    password: string;
    repeatPassword: string;
    first_name: string;
    last_name: string;
  };
  const register = ({
    username,
    user_email,
    password,
    first_name,
    last_name,
  }: RegisterUser) => {};

  const refreshToken = () => {};

  const getUsers = () => {};

  const reRefreshAccessToken = () => {};

  const initAuth = () => {};

  const logout = () => {};
  return {
    useAuth,
    currentUser: getUser(),
    setUser,
    login,
    register,
    useAuthUser,
    useAuthToken,
    initAuth,
    useAuthLoading,
    getUsers,
    logout,
    note,
  };
};
