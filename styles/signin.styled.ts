import styled from 'styled-components';

export const SignBody = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: var(--Background);
  padding: 3.2rem;
`;

export const SignContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
`;

export const SignFormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
`;

export const FormLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  margin: 0 auto;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  span {
    font-size: 1.6rem;
    line-height: normal;
  }

  p {
    color: var(--Linkbrary-primary-color, #6d6afe);
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
  }
`;

export const InputModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  label {
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const WarningMessage = styled.p`
  color: var(--ErrorMessage);
  font-size: 1.4rem;
  margin: 0;
`;

export const TextHiddenButton = styled.span<{ $hidden: boolean }>`
  position: absolute;
  border: none;
  margin: 0;
  padding: 0;
  right: 1.5rem;
  top: 4.7rem;
  height: 1.6rem;
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${(props) =>
    props.$hidden ? '/eye_off.svg' : '/eye-on.svg'});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const SnsLogin = styled.div`
  display: flex;
  width: 40rem;
  padding: 1.2rem 2.4rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid var(--Linkbrary-gray20);
  background: var(--Linkbrary-gray10);
  color: var(--Linkbrary-gray100);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 40rem;
  }
`;

export const SnsIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  a {
    display: flex;
    height: 4.2rem;
    width: 4.2rem;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;

export const Google = styled.a`
  background-color: var(--Section-white);

  img {
    with: 2.2rem;
    height: 2.2rem;
  }
`;

export const Kakao = styled.a`
  background-color: var(--Kakao-logo-color);
`;

export const TextArea = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 40rem;
  }
`;
