import { useFetch } from "../useFetch";
import moment from "moment";
import thumbnail from "../images/thumbnail.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 340px);
  grid-template-rows: 334px;
  column-gap: 20px;
  row-gap: 25px;
  margin: 0 auto;

  @media (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardImgSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
`;

const CardImg = styled.img`
  width: 340px;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &: hover {
    transform: scale(1.3);
    transition: transform 0.3s ease;
  }
`;
const CardTextSection = styled.section`
  width: 300px;
  height: 136px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CardCreatedAt = styled.div`
  color: #666666;
  font-size: 13px;
  height: 17px;
`;

const CardTextBody = styled.div`
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  height: 49px;
`;

const CardDate = styled.div`
  font-size: 14px;
`;
function Card() {
  const CardData = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");

  const formatDate = (dateString) => {
    const date = moment(dateString);
    return date.format("YYYY.MM.DD");
  };

  const generateTimeText = (createdAt) => {
    const timeDiff = moment().diff(moment(createdAt), "minutes");

    if (timeDiff < 2) {
      return "1 minute ago";
    }
    if (timeDiff <= 59) {
      return `${timeDiff} minutes ago`;
    }
    if (timeDiff < 60 * 24) {
      const hours = Math.floor(timeDiff / 60);
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    }
    if (timeDiff <= 60 * 24 * 30) {
      const days = Math.floor(timeDiff / (60 * 24));
      return days === 1 ? "1 day ago" : `${days} days ago`;
    }
    if (timeDiff <= 60 * 24 * 30 * 31) {
      const months = Math.floor(timeDiff / (60 * 24 * 30));
      return months === 1 ? "1 month ago" : `${months} months ago`;
    }
    const years = Math.floor(timeDiff / (60 * 24 * 30 * 12));
    return years === 1 ? "1 year ago" : `${years} years ago`;
  };

  return (
    <CardContainer>
      {CardData &&
        CardData.folder.links.map((link) => (
          <CardImgSection key={link.id}>
            <Link to={link.url} target="_blank">
              <CardImg
                src={link.imageSource || thumbnail}
                alt={link.imageSource ? link.title : "thumbnail_img"}
              />
            </Link>
            <CardTextSection>
              <div>
                <CardCreatedAt>
                  {generateTimeText(link.createdAt)}
                </CardCreatedAt>
              </div>
              <CardTextBody>{link.description}</CardTextBody>
              <CardDate>{formatDate(link.createdAt)}</CardDate>
            </CardTextSection>
          </CardImgSection>
        ))}
    </CardContainer>
  );
}

export default Card;
