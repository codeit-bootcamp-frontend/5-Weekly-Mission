import { EmptyBox, PostCardWrap } from '@/styles/folderStyle';
import { memo } from 'react';
import PostCard from './PostCard';
import { IFolderContent } from './interface';

interface IFolderList {
  $content: IFolderContent[] | undefined | null;
}

function PostCardList({ $content }: IFolderList) {
  if (!$content || !$content.length) return <EmptyBox>저장된 링크가 없습니다.</EmptyBox>;
  return (
    <PostCardWrap>
      {$content?.map((data) => (
        <PostCard
          key={data.id}
          {...data}
        />
      ))}
    </PostCardWrap>
  );
}
export default memo(PostCardList);
