import styled from 'styled-components';
import noImage from '../asset/noImage.png';

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 340px;
  height: 335px;
  overflow: hidden;
  box-shadow: 2px 2px 2px rgb(0 0 0 /20%);

  &:hover div {
    background-size: 130% 130%;
  }
`;

const FolderImage = styled.div`
  background-image: ${({ $bg }) => ($bg ? `url(${$bg})` : `url(${noImage})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-color: #dddfff;
  background-size: 100% 100%;
  width: 100%;
  height: 200px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 12px;

  & div {
    font-family: Pretendard;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const LongAgo = styled.div`
  color: #666666;
  font-size: 13px;
`;

const Title = styled.div`
  color: #000;
  height: 19px;
  font-size: 18px;
  font-weight: bold;
`;

const Info = styled.div`
  color: #000;
  height: 17px;
`;

const CreatedAt = styled.div`
  color: #333333;
  font-size: 14px;
`;

function Card({ item }) {
  const { createdAt, title, description, imageSource: bg } = item;

  const uploadDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  function longAgo(value) {
    const date = new Date(value);
    const now = new Date();
    const MINUTE = 60 * 1000;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const MONTH = 31 * DAY;
    const YEAR = 12 * MONTH;

    const time = now - date;

    if (time < 120000) return '1 minute ago';
    if (time < HOUR) {
      const minutes = parseInt(time / MINUTE);
      return `${minutes} minute ago`;
    }
    if (time < 2 * HOUR) return '1 hour ago';
    if (time < DAY) {
      const hours = parseInt(time / HOUR);
      return `${hours} hours ago`;
    }
    if (time < 2 * DAY) return '1 day ago';
    if (time < MONTH) {
      const days = parseInt(time / DAY);
      return `${days} days ago`;
    }
    if (time < 2 * MONTH) return '1 month ago';
    if (time < YEAR) {
      const months = parseInt(time / MONTH);
      return `${months} months ago`;
    }
    if (time < 2 * YEAR) return '1 year ago';
    const years = parseInt(time / YEAR);
    return `${years} years ago`;
  }

  return (
    <Frame>
      <FolderImage $bg={bg}></FolderImage>
      <CardInfo>
        <LongAgo>{longAgo(createdAt)}</LongAgo>
        <Title>{title}</Title>
        <Info>{description}</Info>
        <CreatedAt>{uploadDate(createdAt)}</CreatedAt>
      </CardInfo>
    </Frame>
  );
}

export default Card;
