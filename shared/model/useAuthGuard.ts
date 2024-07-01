import { useRouter } from "next/router";

export function useAuthGuard() {
  const router = useRouter();

  type GuardPath = "token" | "notToken";

  const guardPath: Record<GuardPath, Record<string, boolean>> = {
    token: { "/folder/[[...folderId]]": true },
    notToken: { "/signin": true },
  };
  // SSR에서의 접근을 막기 위한 로직입니다.
  if (typeof window === "undefined") return;
  const pathname = router.pathname;
  const token = localStorage.getItem("accessToken");

  if (!token && guardPath["token"][pathname]) {
    router.push("/signin");
    return;
  }
}
