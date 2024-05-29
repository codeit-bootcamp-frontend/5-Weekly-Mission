import { IModal, modalOrder } from '@/src/constant/modal.constant';
import { ModalTitle } from '@/styles/commonStyle';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../common/atoms/Button';
import CheckBox from '../common/atoms/CheckBox';
import Input from '../common/atoms/Input';
import ShareModal from '../share/ShareModal';
import { ModalBody, ModalContainer, ModalDim, ModalFoot, ModalHead, ModalWrap } from './modalStyle';

export interface IModalInfo {
  $card_Id?: string;
  $folder_Id?: string;
  type: string;
  $descText?: string;
  onOpen: boolean;
  onClose: () => void;
  $modalData?: IModal<any>;
}

function bodyContent(body: string, data?: IModal<any>) {
  if (body === 'input') {
    return <Input />;
  } else if (body === 'sns') {
    return <ShareModal />;
  } else if (body === 'checkbox') {
    return <CheckBox data={data} />;
  }
}

function Modal({ onOpen, onClose, type, $card_Id, $folder_Id, $descText, $modalData }: IModalInfo) {
  const [value, setSetValue] = useState<IModal<any>>();
  const modalClose = () => {
    onClose();
  };

  useEffect(() => {
    setSetValue(modalOrder[type]);
  }, [type]);

  if (!onOpen) return null;

  return (
    <>
      <ModalWrap>
        <ModalDim onClick={modalClose}></ModalDim>
        <ModalContainer>
          {value && (
            <>
              <ModalHead>
                <ModalTitle>{value.title}</ModalTitle>
                {$descText && <div className='desc'>{$descText}</div>}
              </ModalHead>
              {value.bodyType && <ModalBody>{bodyContent(value.bodyType, $modalData ? $modalData : undefined)}</ModalBody>}
              {value.buttonStyle && (
                <ModalFoot>
                  <Button
                    btnClass={value.buttonStyle}
                    onclick={() => modalClose()}>
                    {value.buttonText}
                  </Button>
                </ModalFoot>
              )}
            </>
          )}

          <Button
            btnClass={'button--modal-close'}
            onclick={() => modalClose()}>
            <Image
              src='/assets/icon/icon_close.svg'
              alt='닫기'
              width={24}
              height={24}
            />
          </Button>
        </ModalContainer>
      </ModalWrap>
    </>
  );
}
export default Modal;
