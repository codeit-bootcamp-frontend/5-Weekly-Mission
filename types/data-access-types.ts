//user
export type User = {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

//link
export type Link = {
  id: number;
  created_at: Date;
  updated_at?: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id?: number;
};

export type Links = {
  data: Link[];
};

//folder
export type Folder = {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: {
    count: number;
  };
};

export type Folders = {
  data: Folder[];
};

//sample
export type SampleUser = {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
};

export type SampleLink = {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

export interface EditedSampleLink
  extends Omit<SampleLink, "title" | "createdAt"> {
  createdAt: string;
  alt: string;
  elapsedTime: string;
}

export type SampleFolder = {
  folder: {
    id: number;
    name: string;
    owner: Omit<SampleUser, "email">;
    links: SampleLink[];
  };
};

//
export type Types =
  | User
  | Link
  | Links
  | Folders
  | SampleUser
  | SampleLink
  | SampleFolder;
