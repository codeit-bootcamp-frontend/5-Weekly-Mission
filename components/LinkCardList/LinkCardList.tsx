import FolderToolBar from '@/components/FolderToolBar/FolderToolBar';
import LinkCard from '@/components/LinkCard/LinkCard';
import styles from './LinkCardList.module.scss';
import { useKeywordState } from '@/hooks/useSearchValue';
import useLinks from '../../hooks/useLinks';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import useFolders from '../../hooks/useFolders';

interface LinkCardListProp {}

export default function LinkCardList({}: LinkCardListProp) {
  const { keyword } = useKeywordState();
  const { links } = useLinks();
  const { showModal, setShowModal, modalContent, setModal } = useModal();
  const { folders } = useFolders();

  function filterLinksByKeyword(keyword: string) {
    if (!links) return;
    if (keyword === '') return links;
    return links.filter(
      (item) =>
        item.url?.includes(keyword) ||
        item.description?.includes(keyword) ||
        item.title?.includes(keyword)
    );
  }

  const curItems = filterLinksByKeyword(keyword);

  const handleAddToFolder = (url: string) => {
    setModal('add', {
      headerText: '폴더에 추가',
      subHeaderText: url,
      folders: folders,
      buttonText: '추가하기',
    });
  };

  const handleLinkDelete = (url: string) => {
    setModal('delete', { headerText: '링크 삭제', subHeaderText: url });
  };

  return (
    <div className={styles.linkCardListContainer}>
      {showModal && (
        <>
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>
          <div
            className={styles.overlay}
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
      <div className={styles.contentWrapper}>
        {curItems && curItems.length > 0 ? (
          <ul className={styles.linkCardList}>
            {curItems.map((item) => (
              <li key={item.id}>
                <LinkCard
                  linkCardInfo={item}
                  onAddToFolder={handleAddToFolder}
                  onLinkDelete={handleLinkDelete}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noSavedLink}>저장된 링크가 없습니다</p>
        )}
      </div>
    </div>
  );
}
