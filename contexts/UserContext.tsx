import { getUser } from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { ReactNode, createContext, useContext } from "react";

export interface User {
  id: string;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id?: string;
}

export const UserContext = createContext({
  id: "",
  created_at: new Date(),
  name: "",
  image_source: "",
  email: "",
  auth_id: "",
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const session = useSession();

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    staleTime: 60 * 1000 * 60,
    enabled: session.status === "authenticated",
  });

  return (
    <UserContext.Provider value={user?.[0]}>{children}</UserContext.Provider>
  );
};

export const useLoadUser = () => {
  const user = useContext(UserContext);

  return { user };
};
