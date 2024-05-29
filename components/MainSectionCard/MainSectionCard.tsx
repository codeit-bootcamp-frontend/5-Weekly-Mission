import { useEffect, useState } from 'react';
import * as S from './MainSectionCard.styled';
import Image from 'next/image';

interface SectionItem {
  title: string;
  description: string;
  id: number;
  image: string;
}

function MainSectionCard({ item }: { item: SectionItem }) {
  const { title, description, image } = item;

  return (
    <S.SectionCard>
      <S.TextBox__title>{title}</S.TextBox__title>
      <S.Description>{description}</S.Description>
      <S.SectionImage>
        <Image src={image} alt="색션 이미지" fill />
      </S.SectionImage>
    </S.SectionCard>
  );
}

export default MainSectionCard;
