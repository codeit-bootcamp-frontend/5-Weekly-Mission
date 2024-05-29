import Image from 'next/image';
import { memo } from 'react';
import styled from './loading.module.css';
import { CSSProperties } from 'styled-components';

const LOADING_IMAGE = '/assets/icon/icon_loading.svg';

const loadingWrap: CSSProperties = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: '10',
};

function Loading() {
  return (
    <div style={loadingWrap}>
      <Image
        src={LOADING_IMAGE}
        alt='loading'
        width={100}
        height={120}
        priority
      />
    </div>
  );
}
export default Loading;
