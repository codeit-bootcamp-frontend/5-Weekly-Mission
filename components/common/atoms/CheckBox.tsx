import { IModal } from '@/src/constant/modal';
import { CheckBoxWrap } from './checkBoxStyle';

function CheckBox({ data }: IModal<any>['modalData']) {
  return (
    <CheckBoxWrap className='chk--list-type1'>
      {data &&
        data?.map((list: any) => (
          <div
            className='inner'
            key={list.id}>
            <input
              type='checkbox'
              id={list.id}
            />
            <label htmlFor={list.id}>
              <strong>{list.name}</strong>
              <span>{list.link.count}개 링크</span>
            </label>
          </div>
        ))}
    </CheckBoxWrap>
  );
}
export default CheckBox;
