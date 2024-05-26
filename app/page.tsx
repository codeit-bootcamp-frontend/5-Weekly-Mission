'use client';
import LinkButton from '@/components/common/atoms/LinkButton';
import Loading from '@/components/loading/Loading';
import { Container, TitleLs, TitleMs } from '@/styles/commonStyle';
import { useEffect, useState } from 'react';
import { Section } from '../styles/mainStyle';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) return <Loading />;

  return (
    <Container className='body__main'>
      <Section className='section__banner'>
        <TitleLs className='title'>
          <span className='title__clip type'>세상의 모든 정보</span>를<br />
          쉽게 저장하고 <br />
          관리해 보세요
        </TitleLs>
        <LinkButton
          href='/folder'
          linkClass='link--gradient large btn__link-add'>
          링크 추가하기
        </LinkButton>
      </Section>

      <Section className='section__link'>
        <div className='section__inner'>
          <div className='section__text__box'>
            <TitleMs className='title'>
              <span className='title__clip type1'>원하는 링크</span>를<br />
              저장하세요
            </TitleMs>
            <p className='text__size__m'>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <br />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br />한 공간에 저장하세요.
            </p>
          </div>
          <div className='section__img__box'></div>
        </div>
      </Section>

      <Section className='section__folder'>
        <div className='section__inner'>
          <div className='section__text__box'>
            <TitleMs className='title'>
              링크를 폴더로
              <br />
              <span className='title__clip type2'>관리</span>하세요
            </TitleMs>
            <p className='text__size__m'>
              나만의 폴더를 무제한으로 만들고
              <br />
              다양하게 활용할 수 있습니다.
            </p>
          </div>
          <div className='section__img__box'></div>
        </div>
      </Section>

      <Section className='section__share'>
        <div className='section__inner'>
          <div className='section__text__box'>
            <TitleMs className='title'>
              저장한 링크를
              <br />
              <span className='title__clip type3'>공유</span>해 보세요.
            </TitleMs>
            <p className='text__size__m'>
              여러 링크를 폴더에 담고 공유할 수 있습니다.
              <br />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를
              <br />
              공유해 보세요.
            </p>
          </div>
          <div className='section__img__box'></div>
        </div>
      </Section>

      <Section className='section__search'>
        <div className='section__inner'>
          <div className='section__text__box'>
            <TitleMs className='title'>
              저장한 링크를
              <br />
              <span className='title__clip type4'>검색</span>해 보세요
            </TitleMs>
            <p className='text__size__m'>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          </div>
          <div className='section__img__box'></div>
        </div>
      </Section>
    </Container>
  );
}
