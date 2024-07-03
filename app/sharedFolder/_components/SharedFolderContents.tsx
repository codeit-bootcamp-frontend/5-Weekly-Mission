import { Links } from "@/hooks/useGetFolder";
import SharedLinkItem from "./SharedLinkItem";

export default function SharedFolderContents({ list }: { list: Links }) {
  return (
    <div className="relative mx-auto my-0 grid gap-[2rem] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {list.length > 0 ? (
        list.map((item) => <SharedLinkItem item={item} key={item.id} />)
      ) : (
        <div className="flex h-[50vh] flex-col items-center justify-center py-[8rem]">
          저장된 링크가 없습니다.
        </div>
      )}
    </div>
  );
}
