import React, { ReactNode } from "react";

export const PaddingPage = ({ children }: { children: ReactNode }) => {
  return <div style={{ padding: "0px 32px" }}>{children}</div>;
};
