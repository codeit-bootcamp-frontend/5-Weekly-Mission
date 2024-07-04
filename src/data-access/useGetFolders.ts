import { instance, mapFoldersData } from "@/src/util";
import { FolderRawData } from "@/src/type";
import { useQuery } from "@tanstack/react-query";
/**
 * useGetFolders 훅은 사용자 폴더 데이터를 가져와서 매핑된 폴더 데이터 배열을 반환합니다.
 *
 * @returns 훅의 반환 객체입니다.
 * @returns return.loading - 폴더 데이터를 가져오는 요청의 로딩 상태입니다.
 * @returns return.error - 폴더 데이터를 가져오는 요청 중 발생한 오류입니다.
 * @returns return.data - 매핑되고 정렬된 폴더 데이터 배열입니다.
 * @returns return.data[].id - 폴더의 고유 ID입니다.
 * @returns return.data[].createdAt - 폴더 생성 일자입니다.
 * @returns return.data[].name - 폴더의 이름입니다.
 * @returns return.data[].userId - 폴더 소유자의 사용자 ID입니다.
 * @returns return.data[].linkCount - 폴더에 포함된 링크의 개수입니다.
 *
 * @example
 * const { loading, error, data } = useGetFolders();
 *
 * if (loading) {
 *   return <div>Loading...</div>;
 * }
 *
 * if (error) {
 *   return <div>Error occurred: {error.message}</div>;
 * }
 *
 * return (
 *   <div>
 *     {data.map(folder => (
 *       <div key={folder.id}>
 *         <h1>{folder.name}</h1>
 *         <p>{folder.createdAt}</p>
 *         <p>{folder.linkCount} links</p>
 *       </div>
 *     ))}
 *   </div>
 * );
 */

export const useGetFolders = () => {
	const getFolders = () => instance.get<FolderRawData[]>("/folders");
	const { data, error, isLoading, refetch } = useQuery({
	  queryKey: ["folders"],
	  queryFn: getFolders,
	});
  
	const folders = mapFoldersData(data?.data ?? []);
	const sortedFolders = folders.sort((a, b) => a?.id - b?.id);
  
	return { isLoading, error, data: sortedFolders, refetch };
  };
  
