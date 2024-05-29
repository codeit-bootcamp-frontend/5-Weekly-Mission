import ShareKakaotalk from "@/public/assets/ShareKakaotalk.svg";
import ShareFacebook from "@/public/assets/ShareFacebook.svg";
import linkImg from "@/public/assets/link.svg";
import CloseImg from "@/public/assets/_close.svg";
import styles from "./shareModal.module.css";
import Portal from "./Portal";

interface Props {
  onClick : () => void;
  folderName : string;
  currentFolderId : number | null;
}

function ShareModal({ onClick, folderName, currentFolderId } : Props) {
  
  const shareToKakaoTalk = () => {
    const shareUrl = `${window.location.origin}/shared/${currentFolderId}`;
    // 카카오톡으로 공유하는 로직 추가 예정
    console.log("Sharing to KakaoTalk:", shareUrl);
  };

  const shareToFacebook = () => {
    const shareUrl = `${window.location.origin}/shared/${currentFolderId}`;
    // 페이스북으로 공유하는 로직 추가 예정
    console.log("Sharing to Facebook:", shareUrl);
  };

  const copyLink = () => {
    const shareUrl = `${window.location.origin}/shared/${currentFolderId}`;
    // 클립보드에 링크 복사하는 로직 추가 예정
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("클립보드에 링크가 복사되었어요.");
      console.log("Link copied to clipboard:", shareUrl);
    });
  };

  return (
    <Portal elementId="modal-root">
      <div className={styles.ModalContainer}>
        <div className={styles.ModalBackground}></div>
        <div className={styles.ModalContent}>
          <span className={styles.text}>공유하기</span>
          <span className={styles.folderName}> {folderName} </span>
          <div className={styles.share__container}>
            <div className={styles.share__item} onClick={shareToKakaoTalk}>
              <img
                src={ShareKakaotalk}
                alt="카카오톡 로고"
                className={styles.shareImg}
              />
              <span>카카오톡</span>
            </div>
            <div className={styles.share__item} onClick={shareToFacebook}>
              <img
                src={ShareFacebook}
                alt="페이스북 로고"
                className={styles.shareImg}
              />
              <span>페이스북</span>
            </div>
            <div className={styles.share__item} onClick={copyLink}>
              <div className={styles.linkImg__container}>
                <img
                  src={linkImg}
                  alt="링크 복사 이미지"
                  className={`${styles.linkImg} ${styles.shareImg}`}
                />
              </div>
              <span>링크 복사</span>
            </div>
          </div>
          <img
            src={CloseImg}
            alt="닫기 버튼 이미지"
            className={styles.CloseImg}
            onClick={onClick}
          />
        </div>
      </div>
    </Portal>
  );
}

export default ShareModal;
