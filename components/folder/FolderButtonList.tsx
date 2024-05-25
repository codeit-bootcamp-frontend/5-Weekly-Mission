import { BookMarkBtnList } from '@/styles/folderStyle';
import { memo } from 'react';
import Button from '../common/atoms/Button';
import { IFolderMenuButton } from './interface';

interface IButtonList {
  $menu?: IFolderMenuButton[];
  $activeBtnId: string;
  onClick: (id: string) => void;
}

function FolderButtonList({ $menu, $activeBtnId, onClick }: IButtonList) {
  return (
    <BookMarkBtnList>
      <Button
        $id={`전체`}
        $btnClass={`button--outlined ${$activeBtnId === '전체' ? 'active' : ''}`}
        onclick={() => onClick(`전체`)}>
        전체
      </Button>
      {$menu &&
        $menu.map((item) => (
          <Button
            key={item.id}
            $id={`${item.id}`}
            $btnClass={`button--outlined ${$activeBtnId === `${item.id}` ? 'active' : ''}`}
            onclick={() => onClick(`${item.id}`)}>
            {item.name}
          </Button>
        ))}
    </BookMarkBtnList>
  );
}

export default memo(FolderButtonList);
