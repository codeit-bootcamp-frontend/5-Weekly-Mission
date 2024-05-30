'use client';

import { LinkObj } from '@/utils/interfaces';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from '@/components/LinkCardList/LinkCardList.module.scss';
import SharedLinkCard from '@/components/SharedLinkCard/SharedLinkCard';
import { useKeywordState } from '@/hooks/useSearchValue';
interface SharedLinkCardListProps {
  items: LinkObj[] | undefined;
}

export default function SharedLinkCardList({ items }: SharedLinkCardListProps) {
  const { keyword } = useKeywordState();

  function filterLinksByKeyword(keyword: string) {
    if (!items) return;
    if (keyword === '') return items;
    return items.filter(
      (item) =>
        item.url?.includes(keyword) ||
        item.description?.includes(keyword) ||
        item.title?.includes(keyword)
    );
  }

  const curItems = filterLinksByKeyword(keyword);

  return (
    <div className={styles.linkCardListContainer}>
      <div className={styles.contentWrapper}>
        <SearchBar />
        {curItems && curItems.length > 0 ? (
          <ul className={styles.linkCardList}>
            {curItems.map((item) => (
              <li key={item.id}>
                <SharedLinkCard linkCardInfo={item} />
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
