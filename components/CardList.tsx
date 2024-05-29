import styled from "styled-components";
import Card from "./Card";

export interface LinkItem {
  id: number;
  createdAt?: string;
  created_at?: string;
  updated_at?: string | null;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
  image_source?: string;
  folder_id?: number;
}

export type FolderObject = {
  data: {
    id: number;
    created_at: string;
    favorite: boolean;
    link: { count: number };
    name: string;
    user_id: number;
  }[];
};

export interface CardBase {
  folder?: FolderObject;
  folderPage?: boolean;
}

interface CardListProps extends CardBase {
  items: LinkItem[];
}

function CardList({ items, folder, folderPage }: CardListProps) {
  return (
    <CardsList>
      {items?.map((item) => {
        return (
          <li key={item?.id}>
            <Card item={item} folder={folder} folderPage={folderPage} />
          </li>
        );
      })}
    </CardsList>
  );
}

export default CardList;

const CardsList = styled.ul`
  display: grid;
  gap: 25px 20px;
  align-self: center;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1123px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
