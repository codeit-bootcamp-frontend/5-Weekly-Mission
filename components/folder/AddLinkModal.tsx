import styled, { css } from 'styled-components';
import Modal from '@/components/common/Modal';
import { useState } from 'react';
import check from '@/assets/images/icons/check.png';
import { FetchData, FoldersData } from '@/common/api';
import Image from 'next/image';

const LinkName = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 22px;
  margin: 8px 0 24px 0;
  font-size: 14px;
  line-height: 22px;
  color: #9fa6b2;
  word-break: break-all;
  overflow: hidden;
`;

const Folders = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 8px;
`;

interface SelectedProps {
  $isSelected: boolean | undefined;
}

const Folder = styled.div<SelectedProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 8px;

  ${(props) => {
    if (props.$isSelected)
      return css`
        background-color: #f0f6ff;
        color: #6d6afe;
      `;
  }}
`;

const FolderLeft = styled.div`
  display: flex;
  gap: 8px;
`;

const FolderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const FolderName = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  color: #373740;
`;

const LinkCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #9fa6b2;
`;

const CheckImg = styled(Image)`
  width: 14px;
  height: 14px;
`;

const AddButton = styled.button`
  width: 280px;
  height: 51px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(90deg, rgba(109, 106, 254, 1) 0%, rgba(106, 227, 254, 1) 100%);
  border: none;
  font-size: 16px;
  font-weight: 600;
  margin-top: 24px;
`;

interface AddLinkModalProps {
  title?: string;
  width?: string;
  height?: string;
  padding?: string;
  setter?: (param: boolean) => void;
  url?: string;
  folderData?: FetchData<FoldersData>;
}

export default function AddLinkModal({ title, width, height, padding, setter, url, folderData }: AddLinkModalProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <Modal title={title} width={width} height={height} padding={padding} setter={setter}>
      <LinkName>{url}</LinkName>
      <Folders>
        {folderData?.data?.folder.map((item, idx) => (
          <Folder
            key={item.id}
            onClick={() => {
              setSelectedId(item.id);
            }}
            $isSelected={selectedId === null ? idx === 0 : selectedId === item.id}
          >
            <FolderLeft>
              <FolderName>{item.name}</FolderName>
              {/* 확인해야함 */}
              {/* <LinkCount>{item.link.count}개 링크</LinkCount> */}
            </FolderLeft>
            <FolderRight>
              {(selectedId === null ? idx === 0 : selectedId === item.id) && <CheckImg src={check} alt='check' />}
            </FolderRight>
          </Folder>
        ))}
      </Folders>
      <AddButton>추가하기</AddButton>
    </Modal>
  );
}
