interface FolderBoxProps {
  id: number;
  name: string;
  selected?: boolean;
  setSelectedId: (id: number) => void;
  setFolderName: (name: string) => void;
}

function FolderBox({ id, name, selected, setSelectedId, setFolderName }: FolderBoxProps) {
  const nonSelectedClass =
    'inline-block h-[35px] rounded-[5px] text-[16px] leading-[35px] border border-[#6d6afe] px-[5px] mr-[5px] cursor-pointer';
  const selectedClass =
    'inline-block h-[35px] rounded-[5px] text-[16px] leading-[35px] border border-[#6d6afe] px-[5px] mr-[5px] cursor-pointer bg-[#6d6afe] text-white';

  return selected ? (
    <span className={selectedClass}>{name}</span>
  ) : (
    <span
      className={nonSelectedClass}
      onClick={() => {
        setSelectedId(id);
        setFolderName(name);
      }}
    >
      {name}
    </span>
  );
}

export default FolderBox;
