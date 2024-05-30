import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/components/LinkCard/LinkCard.module.scss';
import getTimeDifference from '@/utils/time-functions/getTimeDifference';
import formatDate from '@/utils/time-functions/formatDate';
import { LinkObj } from '@/utils/interfaces';

const noImagePlaceholder = '/assets/images/no-image.png';

interface SharedLinkCardProp {
  linkCardInfo: LinkObj;
}

export default function SharedLinkCard({ linkCardInfo }: SharedLinkCardProp) {
  const thumbnailURL = linkCardInfo.image_source
    ? linkCardInfo.image_source
    : noImagePlaceholder;
  const description = linkCardInfo.description;
  const url = linkCardInfo.url;
  const createdDate = new Date(linkCardInfo.created_at);
  const timestamp = getTimeDifference(createdDate);
  const altMessage = linkCardInfo.title;

  return (
    <a
      className={styles.linkCard}
      href={url}
      target='_blank'
      rel='noreferrer noopener'
    >
      <div className={styles.thumbnailContainer}>
        <Image
          className={styles.thumbnail}
          src={thumbnailURL}
          alt={altMessage}
          fill
        />
      </div>
      <div className={styles.linkCardInfo}>
        <div className={styles.linkCardTimestampBar}>
          <span className={styles.timestamp}>{timestamp}</span>
        </div>
        <p className={styles.linkCardDescription}>{description}</p>
        <span className={styles.linkCardCreated}>
          {formatDate(createdDate)}
        </span>
      </div>
    </a>
  );
}
