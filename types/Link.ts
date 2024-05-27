export interface LinkItem {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export interface LinkParam {
  listInfo: LinkItem[];
  isSetting?: boolean;
}

export interface LinkItemParam {
  linkInfo: LinkItem;
  isSetting?: boolean;
}
