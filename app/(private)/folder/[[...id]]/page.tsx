import { getFolderProps, getLinkProps } from '@/api/folder.api';
import { IFolderContent, IFolderMenuButton } from '@/components/folder/interface';
import FolderClient from './FolderClient';

export interface IFolderClientProps {
  menuData: IFolderMenuButton[];
  contentData: IFolderContent[];
}

export async function getFolderProp(id: string): Promise<IFolderClientProps> {
  try {
    const [menuData, contentData] = await Promise.all([getFolderProps(), getLinkProps(id)]);
    return { menuData, contentData };
  } catch (error) {
    console.log('ERROR IN SERVER FETCHING DATA: ', error);
    return {
      menuData: [],
      contentData: [],
    };
  }
}

export default async function Folder({ params }: { params: { id: string } }) {
  const { menuData, contentData } = await getFolderProp(params.id);
  const { id: pageId } = params;
  const props = { menuData, contentData, pageId };
  if (!menuData || !contentData) return <div>데이터가 없습니다.</div>;
  return <FolderClient {...props} />;
}
