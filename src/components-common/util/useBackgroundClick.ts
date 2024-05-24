import { useEffect } from "react";
import { rootId } from "./constant";
import type { handleBackgroundClickType } from "../ui-popover/Popover";

export const useBackgroundClick = (callback: handleBackgroundClickType) => {
  useEffect(() => {
    const rootElement: HTMLElement | null = document.getElementById(rootId);
    rootElement?.addEventListener("click", callback);
    return () => {
      rootElement?.removeEventListener("click", callback);
    };
  }, [callback]);
};
