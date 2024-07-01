import Input from '@/components/common/Input';

export default function AddModal() {
  return (
    <>
      <Input width='280px' height='60px' placeholder='내용 입력' margin='24px 0 15px 0' padding='0 15px' />
      <button className='w-full h-12 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-cyan-400 border-none text-lg font-semibold mt-6'>
        추가하기
      </button>
    </>
  );
}
