import React, { useMemo, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  elementId: string;
}

function Portal({ children, elementId }: PortalProps) {
  const rootElement = useMemo(() => document.getElementById(elementId) as HTMLElement, [
    elementId
  ]);

  // if (!rootElement) {
  //   throw new Error(`Element with id '${elementId}' not found`);
  // }

  return createPortal(children, rootElement);
}

export default Portal;
