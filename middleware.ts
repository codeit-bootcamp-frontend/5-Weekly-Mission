export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/folder", "/folder/:folderId*"],
};
