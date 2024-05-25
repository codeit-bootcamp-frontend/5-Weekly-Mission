import { getFolderDetailProps, getLinkProps } from '@/api/folder.api';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import SharedClient from './SharedClient';

export async function getSharedProp(id: string) {
  try {
    const [menuData, contentData] = await Promise.all([getFolderDetailProps(id), getLinkProps(id)]);
    return { menuData, contentData };
  } catch (error) {
    console.log('ERROR IN SERVER FETCHING DATA: ', error);
  }
  revalidatePath('/folder');
  redirect('/folder');
}

export default async function Shared({ params: { id } }: { params: { id: string } }) {
  const pageId = id;
  const { menuData, contentData } = await getSharedProp(pageId);
  const props = { menuData, contentData, pageId };
  return <SharedClient {...props} />;
}
