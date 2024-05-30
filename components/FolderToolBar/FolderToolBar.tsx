import FolderToolBarButton from './FolderToolBarButton';
import styles from './FolderToolBar.module.scss';
import UtilButton from './UtilButton';
import { UTIL_BUTTONS_PROPS } from './constants';
import useFolders from '../../hooks/useFolders';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Modal from '@/components/Modal/Modal';
import useModal from '../../hooks/useModal';

const addIcon = '/assets/images/add_icon.svg';
const addIconWhite = '/assets/images/add_icon_white.svg';

export default function FolderToolBar() {
  const { folders } = useFolders();

  const { showModal, modalContent, setShowModal, setModal } = useModal();
  const router = useRouter();

  let currentFolderId = router.query.slug ? parseInt(router.query.slug[0]) : -1;
  const currentFolderName = folders?.find(
    (folder) => folder.id === currentFolderId
  )?.name;
  UTIL_BUTTONS_PROPS.share.onClick = () => {
    setModal('share', {
      headerText: '폴더 공유',
      subHeaderText: currentFolderName,
      folderNum: currentFolderId,
    });
  };

  UTIL_BUTTONS_PROPS.changeName.onClick = () => {
    setModal('input', {
      headerText: '폴더 공유',
      initialValue: currentFolderName,
      folderNum: currentFolderId,
      buttonText: '변경하기',
    });
  };

  UTIL_BUTTONS_PROPS.delete.onClick = () => {
    setModal('delete', {
      headerText: '폴더 공유',
      subHeaderText: currentFolderName,
    });
  };

  return (
    <>
      {showModal && (
        <>
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>
          <div
            className={styles.overlay}
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
      <div className={styles.folderToolBarContainer}>
        <div className={styles.folderToolButtons}>
          <ul className={styles.folderNameButtons}>
            {folders?.map((item) => (
              <li key={item.id}>
                <FolderToolBarButton
                  onClick={() => {
                    if (item.id < 0) {
                      router.push('/folder');
                      return;
                    }

                    router.push(`/folder/${item.id}`);
                  }}
                  id={item.id}
                  isFocused={item.id == currentFolderId}
                >
                  {item.name}
                </FolderToolBarButton>
              </li>
            ))}
          </ul>

          <button
            className={styles.folderAddButton}
            onClick={() => {
              setModal('input', {
                headerText: '폴더 추가',
                buttonText: '추가하기',
              });
            }}
          >
            <span>폴더 추가</span>
            <Image
              src={addIcon}
              alt='폴더 추가 아이콘'
              className={styles.addIcon}
              width={16}
              height={16}
            />
            <Image
              src={addIconWhite}
              alt='폴더 추가 아이콘'
              className={styles.addIconWhite}
              width={16}
              height={16}
            />
          </button>
        </div>
        <div className={styles.folderNameBar}>
          <span className={styles.folderNameDisplay}>{currentFolderName}</span>
          {currentFolderId !== -1 && (
            <ul className={styles.utilButtons}>
              {Object.entries(UTIL_BUTTONS_PROPS).map(([key, btn]) => (
                <li key={btn.id}>
                  <UtilButton
                    imgSrc={btn.imgSrc}
                    alt={btn.alt}
                    onClick={btn.onClick}
                  >
                    {btn.btnText}
                  </UtilButton>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
