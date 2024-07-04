import { instance, DEFAULT_FOLDER } from "../util";
import { FolderRawData } from "../type";
import { useQuery } from "@tanstack/react-query";

/**
 * useGetFolder 훅은 샘플 폴더 데이터를 가져와서 매핑된 폴더 데이터를 반환합니다.
 *
 * @returns 훅의 반환 객체입니다.
 * @returns return.loading - 폴더 데이터를 가져오는 요청의 로딩 상태입니다.
 * @returns return.error - 폴더 데이터를 가져오는 요청 중 발생한 오류입니다.
 * @returns return.data - 매핑된 폴더 데이터 객체입니다.
 * @returns return.data.profileImage - 폴더 소유자의 프로필 이미지 URL입니다.
 * @returns return.data.ownerName - 폴더 소유자의 이름입니다.
 * @returns return.data.folderName - 폴더의 이름입니다.
 * @returns return.data.links - 폴더에 포함된 링크의 배열입니다.
 *
 * @example
 * const { loading, error, data } = useGetFolder();
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
 *     <h1>{data.folderName}</h1>
 *     <p>{data.ownerName}</p>
 *     <img src={data.profileImage} alt={`${data.ownerName}'s profile`} />
 *     <ul>
 *       {data.links.map(link => (
 *         <li key={link.id}>{link.title}</li>
 *       ))}
 *     </ul>
 *   </div>
 * );
 */
export const useGetFolder = (folderId: string) => {
	const getFolder = () => instance.get<FolderRawData[]>(`/folders/${folderId}`);
  
	const { data, error, isLoading } = useQuery({
	  queryKey: ["folders", folderId],
	  queryFn: getFolder,
	  enabled: !!folderId,
	});
  
	const folderDataResponse = data?.data?.[0];
  
	const folderData = folderDataResponse
	  ? {
		  id: folderDataResponse.id,
		  name: folderDataResponse.name,
		  userId: folderDataResponse.user_id,
		  createdAt: folderDataResponse.created_at,
		}
	  : DEFAULT_FOLDER;
  
	return { isLoading, error, data: folderData };
  };
