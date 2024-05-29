import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { LOGIN_TOKEN, getUserData } from "../Api/Api";
import { useData } from "../Hooks/useData";
import { UserData } from "../components/Header";

const UserContext = createContext<{
  user: { data: UserData[] };
  isLogin: boolean;
}>({
  user: { data: [] },
  isLogin: false,
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, getUser] = useData(getUserData);
  const [isLogIn, setIsLogIn] = useState(true);

  const getData = useCallback(
    async (userToken: string | null) => {
      if (!userToken) {
        return setIsLogIn(false);
      }
      try {
        await getUser(userToken);
        setIsLogIn(true);
      } catch (err) {
        setIsLogIn(false);
      }
    },
    [getUser]
  );

  useEffect(() => {
    const userToken = window.localStorage.getItem(LOGIN_TOKEN);
    getData(userToken);
  }, [isLogIn, getData]);

  return (
    <UserContext.Provider value={{ user, isLogin: isLogIn }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("반드시 UserProvider 안에서 사용해야 합니다.");
  }

  return context;
}
