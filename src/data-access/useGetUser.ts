import { instance } from "@/src/util";
import { UserRawData } from "@/src/type";
import { DEFAULT_USER } from "@/src/util";
import { useQuery } from "@tanstack/react-query";

/**
 * useGetUser 훅은 사용자 데이터를 가져와 반환합니다.
 *
 * @returns 훅의 반환 객체입니다.
 * @returns return.loading - 사용자 데이터를 가져오는 요청의 로딩 상태입니다.
 * @returns return.error - 사용자 데이터를 가져오는 요청 중 발생한 오류입니다.
 * @returns return.data - 가져온 사용자 데이터입니다.
 *
 * @example
 * const { loading, error, data } = useGetUser();
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
 *     <h1>{data.name}</h1>
 *     <p>{data.email}</p>
 *   </div>
 * );
 */

export const useGetUser = (userId?: number) => {
	const getUser = () => instance.get<UserRawData[]>(`/users/${userId}`);
  
	const { isLoading, error, data } = useQuery({
	  queryKey: ["users", userId],
	  queryFn: getUser,
	  enabled: !!userId,
	});
  
	const userDataResponse = data?.data?.[0];
	const userData = userDataResponse
	  ? {
		  id: userDataResponse.id,
		  name: userDataResponse.name,
		  email: userDataResponse.email,
		  imageSource: userDataResponse.image_source,
		}
	  : DEFAULT_USER;
  
	return { isLoading, error, data: userData };
  };