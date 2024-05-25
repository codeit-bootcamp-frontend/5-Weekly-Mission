'use client';
import { Container, InnerLarge } from '@/styles/commonStyle';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Policy',
};

export default function Policy() {
  return (
    <Container>
      <InnerLarge>Privacy Policy</InnerLarge>
    </Container>
  );
}
