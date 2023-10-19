export const useAuth = () => {
  const useUser = useState("user", () => {});
  const getUser = () => {
    return useUser.value;
  };
  const setUser = (newUser: object) => {
    if (!newUser) return;
    switch (typeof newUser) {
      case "object":
        useUser.value = { ...newUser };
        break;
      case "string":
        useUser.value = newUser;
        break;
      default:
        useUser.value = { ...newUser };

        break;
    }
  };
  return {
    currentUser: getUser(),
    setUser,
  };
};
