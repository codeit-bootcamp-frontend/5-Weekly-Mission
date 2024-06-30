import React, { ReactNode } from "react";

type ModalPorps = {
  title: string;
  subTitle?: string;
};

export interface ModalParam {
  props: ModalPorps;
  component: ReactNode;
}

export interface IModalLayout {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

export type TModalParam = ModalParam | null;
