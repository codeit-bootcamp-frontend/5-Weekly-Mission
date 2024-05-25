'use client';
import { Container, InnerLarge } from '@/styles/commonStyle';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Faq',
};

export default function Faq() {
  return (
    <Container>
      <InnerLarge>Faq</InnerLarge>
    </Container>
  );
}
