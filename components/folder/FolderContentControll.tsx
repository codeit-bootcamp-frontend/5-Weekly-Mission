import { memo } from 'react';
import { FontLS } from '@/styles/commonStyle';
import { ShareBox } from '../share/shareStyle';
import { ShareListBtn } from '@/styles/folderStyle';
import Button from '../common/atoms/Button';
import LinkButton from '../common/atoms/LinkButton';

const folderControlBtn = [
  {
    id: 'fcb1',
    name: '공유',
    imgSrc: '/assets/icon/icon_gray_share.svg',
    bodyType: 'folderShare',
  },
  {
    id: 'fcb2',
    name: '이름 변경',
    imgSrc: '/assets/icon/icon_gray_pen.svg',
    bodyType: 'folderChangeName',
  },
  {
    id: 'fcb3',
    name: '삭제',
    imgSrc: '/assets/icon/icon_gray_delete.svg',
    bodyType: 'folderDelete',
  },
];

interface iControll {
  $title?: string;
  onclick: (type: string) => void;
  $id?: string;
}

function FolderContentControll({ $title, onclick, $id }: iControll) {
  const handleModalOpen = (type: string) => {
    onclick(type);
  };

  return (
    <ShareBox>
      {$id && $id === `전체` ? (
        <FontLS
          as='strong'
          className='font--size-ls tab-title'>
          {$title}
        </FontLS>
      ) : (
        <LinkButton
          $link={`/shared/${$id}`}
          $linkClass='link--title-text tab-title'
          $target='_blank'>
          {$title}
        </LinkButton>
      )}
      {$title === '전체' || (
        <ShareListBtn>
          {folderControlBtn.map((btn) => (
            <Button
              key={btn.id}
              $id={btn.id}
              $btnClass={'button--icon-before'}
              $BeforButtonIcon={btn.imgSrc}
              onclick={() => handleModalOpen(`${btn.bodyType}`)}>
              {btn.name}
            </Button>
          ))}
        </ShareListBtn>
      )}
    </ShareBox>
  );
}

export default memo(FolderContentControll);
