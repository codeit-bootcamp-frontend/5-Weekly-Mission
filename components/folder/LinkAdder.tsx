import { styled } from 'styled-components';
import linkIcon from '@/assets/images/icons/link.png';
import { SyntheticEvent, useState } from 'react';
import AddLinkModal from './AddLinkModal';
import { FetchData, FoldersData } from '@/common/api';
import Image from 'next/image';

const StyledDiv = styled.div`
  width: 100%;
  position: relative;
`;

const LinkInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 69px;
  line-height: 69px;
  font-size: 16px;
  padding-left: 50px;
  border: 1px solid #6d6afe;
  outline: none;
  border-radius: 15px;
`;

const StyledImg = styled(Image)`
  position: absolute;
  top: 25px;
  left: 20px;
`;

const AddButton = styled.button`
  display: inline-block;
  width: 80px;
  height: 37px;
  border-radius: 8px;
  background: linear-gradient(90deg, rgb(109, 106, 254), rgb(106, 227, 254));
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border: none;
  position: absolute;
  top: 16px;
  right: 20px;
  cursor: pointer;
`;

const ModalDiv = styled.div``;

interface LinkAppenderProps {
  folderData: FetchData<FoldersData>;
}

function LinkAppender({ folderData }: LinkAppenderProps) {
  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState('');

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setUrl(target.value);
  };

  return (
    <StyledDiv>
      <LinkInput value={url} onChange={handleChange} placeholder='링크를 추가해 보세요' />
      <StyledImg src={linkIcon} width={20} height={21} alt='SearchBarLinkIcon' />
      <AddButton onClick={() => setOpenModal(true)}>추가하기</AddButton>
      <ModalDiv>
        {openModal && (
          <AddLinkModal
            title='폴더에 추가'
            width='360px'
            height='auto'
            padding='32px 40px'
            setter={setOpenModal}
            url={url}
            folderData={folderData}
          />
        )}
      </ModalDiv>
    </StyledDiv>
  );
}

export default LinkAppender;
