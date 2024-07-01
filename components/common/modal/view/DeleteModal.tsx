interface DeleteModalProps {
  subtitle?: string;
}

export default function DeleteModal({ subtitle }: DeleteModalProps) {
  return (
    <>
      <div className='flex justify-center w-full h-5 mt-2 text-sm leading-6 text-gray-500 break-all overflow-hidden'>
        {subtitle}
      </div>
      <button className='mt-6 w-full h-12 rounded-lg text-white bg-red-500 border-none text-lg font-semibold'>
        삭제하기
      </button>
    </>
  );
}
