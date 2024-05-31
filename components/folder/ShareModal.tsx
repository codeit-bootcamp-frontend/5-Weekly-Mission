import styled from 'styled-components';
import Modal from '@/components/common/Modal';
import shareIcon from '@/assets/images/icons/shareIcon.png';
import facebookIcon from '@/assets/images/icons/facebookIcon.png';
import kakaoIcon from '@/assets/images/icons/kakaoIcon.png';
import Image from 'next/image';

const FolderName = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 22px;
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
  color: #9fa6b2;
  word-break: break-all;
  overflow: hidden;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: 48px 48px 48px;
  gap: 32px;
  margin-top: 24px;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const IconImg = styled(Image)`
  width: 42px;
  height: 42px;
  cursor: pointer;
`;

const IconText = styled.span`
  width: 100%;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: -2px;
  text-align: center;
`;

interface ShareModalProps {
  title?: string;
  width?: string;
  height?: string;
  padding?: string;
  setter?: (param: boolean) => void;
  subtitle?: string;
  shareKakao?: () => void;
  shareFacebook?: () => void;
  folderId?: number;
}

export default function ShareModal({
  title,
  width,
  height,
  padding,
  setter,
  subtitle,
  shareKakao,
  shareFacebook,
  folderId,
}: ShareModalProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(location.href.replace(location.pathname, '') + '/shared/' + folderId).then(() => {
      alert('주소가 복사되었습니다.');
    });
  };

  return (
    <Modal title={title} width={width} height={height} padding={padding} setter={setter}>
      <FolderName>{subtitle}</FolderName>
      <FlexDiv>
        <IconGrid>
          <IconBox>
            <IconImg src={kakaoIcon} alt='kakao share' onClick={shareKakao} />
            <IconText>카카오톡</IconText>
          </IconBox>
          <IconBox>
            <IconImg src={facebookIcon} alt='facebook share' onClick={shareFacebook} />
            <IconText>페이스북</IconText>
          </IconBox>
          <IconBox>
            <IconImg src={shareIcon} alt='link copy' onClick={handleCopy} />
            <IconText>링크 복사</IconText>
          </IconBox>
        </IconGrid>
      </FlexDiv>
    </Modal>
  );
}
