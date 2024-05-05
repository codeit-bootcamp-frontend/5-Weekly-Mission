import {
  SharedPageTemplate,
  FolderPageTemplate,
  Items,
  Container,
} from "./design";
import { ReactNode } from "react";

type SharedLayoutProps = {
  folderInfo: ReactNode;
  searchBar: ReactNode;
  cardList: ReactNode;
};

type FolderLayoutProps = {
  linkForm: ReactNode;
  searchBar: ReactNode;
  folderToolBar: ReactNode;
  cardList: ReactNode;
};

export const SharedPageLayout = ({
  folderInfo,
  searchBar,
  cardList,
}: SharedLayoutProps) => {
  return (
    <SharedPageTemplate>
      {folderInfo}
      <Items>
        {searchBar}
        {cardList}
      </Items>
    </SharedPageTemplate>
  );
};

export const FolderPageLayout = ({
  linkForm,
  searchBar,
  folderToolBar,
  cardList,
}: FolderLayoutProps) => {
  return (
    <FolderPageTemplate>
      {linkForm}
      <Items>
        {searchBar}
        <Container>
          {folderToolBar}
          {cardList}
        </Container>
      </Items>
    </FolderPageTemplate>
  );
};
