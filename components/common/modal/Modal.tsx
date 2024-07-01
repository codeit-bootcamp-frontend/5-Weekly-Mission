import close from '@/public/images/buttons/close.png';
import { ReactNode, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

interface ModalProps {
  title?: string;
  width?: string;
  height?: string;
  padding?: string;
  children?: ReactNode;
}

export interface ModalHandles {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalHandles, ModalProps>(
  ({ title, width = '360px', height = 'auto', padding = '24px 0 15px 0', children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => ({
      open: () => {
        document.body.style.overflow = 'hidden';
        setIsOpen(true);
      },
      close: () => {
        document.body.style.overflow = '';
        setIsOpen(false);
      },
    }));

    const handleModalClose = () => {
      document.body.style.overflow = '';
      setIsOpen(false);
    };

    return (
      isOpen &&
      createPortal(
        <dialog ref={dialogRef} className='w-full h-full z-[999]' open>
          <div className='fixed inset-0 bg-black bg-opacity-40'>
            <div
              className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg'
              style={{ width, height, padding }}
            >
              <button
                onClick={handleModalClose}
                aria-label='CloseButton'
                className='absolute top-4 right-4 bg-none border-none cursor-pointer'
              >
                <Image src={close} width={24} height={24} alt='Modal close button' />
              </button>
              <div className='flex justify-center w-full text-xl font-bold'>{title}</div>
              {children}
            </div>
          </div>
        </dialog>,
        document.getElementById('modal-root')!
      )
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;
