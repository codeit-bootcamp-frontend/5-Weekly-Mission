import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './lander.module.css'; // CSS 모듈 import

import Icon from '@/public/assets/icon.png';
import Landing1 from '@/public/assets/landing1.png';
import Landing2 from '@/public/assets/landing2.png';
import Landing3 from '@/public/assets/landing_3.png';
import Landing4 from '@/public/assets/landing4.svg';
import Landing5 from '@/public/assets/landing5.png';

const App: React.FC = () => {
  return (
    <div className={styles.appBody}>
      <header className={styles.headerBasic}>
        <div className={styles.headerContainer}>
          <a href="/">
            <Image
              src={Icon}
              alt="Linkbrary 로고"
              className={styles.headerLogo}
            />
          </a>
          <Link href="/signin" className={styles.headerLinkToSignin}>
            <p>로그인</p>
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.mainFirstSection}>
          <h1 className={styles.sectionText1}>
            <span className={styles.hilight1}>세상의 모든 정보</span>를 <br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <h1 className={styles.sectionText1Tablet}>
            <span className={styles.hilight1}>세상의 모든 정보</span>를 <br />
            쉽게 저장하고
            <br />
            관리해 보세요
          </h1>
          <Link href="/siginin"  className={styles.mainPluslink_}>
            <p>링크 추가하기</p>
          </Link>
          <div className={styles.mainImgContainer}>
            <Image
              src={Landing1}
              alt="메인 소개 이미지"
              className={styles.firstSectionImg}
            />
          </div>
        </section>
        <section className={styles.mainSecondSection}>
          <div className={styles.sectionText}>
            <h1 className={styles.sectionText2}>
              <span className={styles.hilight2}>원하는 링크</span>를 <br />
              저장하세요
            </h1>
            <p>
              나중에 읽고싶은 글, 다시보고싶은 영상, <br />
              사고싶은 옷, 기억하고싶은 모든 것을
              <br />한 공간에 저장하세요.
            </p>
          </div>
          <Image
            src={Landing2}
            alt="링크 저장 소개 이미지"
            className={styles.secondSectionImg}
          />
        </section>
        <section className={styles.mainSecondSectionMobile}>
          <div className={styles.mainSecondSectionMobileContainer}>
            <h1>
              <span className={styles.hilight2}>원하는 링크</span>를 저장하세요
            </h1>
            <Image
              src={Landing2}
              alt="링크 저장 소개 이미지"
              className={styles.secondSectionImgMobile}
            />
            <p>
              나중에 읽고싶은 글, 다시 보고싶은 영상, 사고 싶은 옷,
              <br />
              기억하고 싶은 모든 것을 한 공간에 저장하세요.
            </p>
          </div>
        </section>
        <section className={styles.mainThirdSection}>
          <Image
            src={Landing3}
            alt="링크 관리 소개 이미지"
            className={styles.thirdSectionImg}
          />
          <div className={styles.sectionText}>
            <h1 className={styles.sectionText3}>
              링크를 폴더로
              <br />
              <span className={styles.hilight3}>관리</span>하세요
            </h1>
            <p>
              나만의 폴더를 무제한으로 만들고
              <br />
              다양하게 활용할 수 있습니다.
            </p>
          </div>
        </section>

        <section className={styles.mainThirdSectionMobile}>
          <div className={styles.mainThirdSectionMobileContainer}>
            <h1>
              링크를 폴더로<span className={styles.hilight3}> 관리</span>하세요
            </h1>
            <Image
              src={Landing3}
              alt="링크 관리 소개 이미지"
              className={styles.thirdSectionImgMobile}
            />
            <p>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수<br />
              있습니다.
            </p>
          </div>
        </section>
        <section className={styles.mainFourthSection}>
          <div className={styles.sectionText}>
            <h1 className={styles.sectionText4}>
              저장한 링크를
              <br />
              <span className={styles.hilight4}>공유</span>해 보세요.
            </h1>
            <p className={styles.sectionText4Basic}>
              여러 링크를 폴더에 담고 공유할 수 있습니다.
              <br />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를
              <br />
              공유해보세요.
            </p>
            <p className={styles.sectionText4Tablet}>
              여러 링크를 폴더에 담고 공유할 수 <br />
              있습니다. 가족, 친구, 동료들에게 쉽고
              <br />
              빠르게 링크를 공유해보세요.
            </p>
          </div>
          <Image
            src={Landing4}
            alt="링크 공유 소개 이미지"
            className={styles.fourthSectionImg}
          />
        </section>
        <section className={styles.mainFourthSectionMobile}>
          <div className={styles.mainFourthSectionMobileContainer}>
            <h1>
              저장한 링크를<span className={styles.hilight4}> 공유</span>해 보세요
            </h1>
            <img
              src={Landing4}
              alt="링크 공유 소개 이미지"
              className={styles.fourthSectionImgMobile}
            />
            <p>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족,
              <br />
              친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.
            </p>
          </div>
        </section>
        <section className={styles.mainFifthSection}>
          <Image
            src={Landing5}
            alt="링크 검색 소개 이미지"
            className={styles.fifthSectionImg}
          />
          <div className={styles.sectionText}>
            <h1 className={styles.sectionText5}>
              저장한 링크를
              <br />
              <span className={styles.hilight5}> 검색</span>해 보세요
            </h1>
            <p className={styles.sectionText5Basic}>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
            <p className={styles.sectionText5Tablet}>
              중요한 정보들을 검색으로 쉽게
              <br />
              찾아보세요.
            </p>
          </div>
        </section>
        <section className={styles.mainFifthSectionMobile}>
          <div className={styles.mainFifthSectionMobileContainer}>
            <h1>
              저장한 링크를<span className={styles.hilight5}> 검색</span>해 보세요
            </h1>
            <Image
              src={Landing5}
              alt="링크 검색 소개 이미지"
              className={styles.fifthSectionImgMobile}
            />
            <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
