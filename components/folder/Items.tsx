import Item from '@/components/common/Item';
import { Link } from '@/api/link';
import { FolderData } from '@/api/folder';

interface ItemsProps {
  folderData?: FolderData[];
  linkData?: Link[] | null;
  shareLinkData?: Link[] | null;
}

function Items({ folderData, linkData, shareLinkData }: ItemsProps) {
  if (linkData) {
    return (
      <>
        {linkData.length === 0 ? (
          <div className='w-full h-[240px] flex justify-center items-center'>
            <span className='text-center font-bold w-full max-w-[687px] md:w-[700px] lg:w-[1060px]'>
              저장된 링크가 없습니다.
            </span>
          </div>
        ) : (
          linkData.map((item) => (
            <Item
              key={item.id}
              createdAt={item.created_at}
              url={item.url}
              title={item.title}
              description={item.description}
              imageSource={item.image_source}
              folderData={folderData}
              editable={true}
            />
          ))
        )}
      </>
    );
  }

  if (shareLinkData) {
    return (
      <>
        {shareLinkData.length === 0 ? (
          <div className='w-full h-[240px] flex justify-center items-center'>
            <span className='text-center font-bold w-full max-w-[687px] md:w-[700px] lg:w-[1060px]'>
              저장된 링크가 없습니다.
            </span>
          </div>
        ) : (
          shareLinkData.map((item) => (
            <Item
              key={item.id}
              createdAt={item.created_at}
              url={item.url}
              title={item.title}
              description={item.description}
              imageSource={item.image_source}
              editable={false}
            />
          ))
        )}
      </>
    );
  }

  return null;
}

export default Items;
