import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useIsTokenRedirect() {
  const router = useRouter();

  useEffect(() => {
    try {
      const token = localStorage.getItem("userToken");
      if (token) router.replace("/folder");
    } catch (error) {
      console.error("Error fetching Sign token:", error);
    }
  }, []);
}
