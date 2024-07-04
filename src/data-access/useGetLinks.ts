import { useCallback } from "react";
import { instance, mapLinksData, ALL_LINKS_ID } from "@/src/util";
import { SelectedFolderId, LinkRawData } from "@/src/type";
import { formatLinkRawData } from "@/src/type";
import { useQuery } from "@tanstack/react-query";

/**
 * useGetLinks 훅은 주어진 폴더 ID에 따라 링크 데이터를 가져와 매핑된 링크 데이터를 반환합니다.
 *
 * @param [folderId=ALL_LINKS_ID] - 링크를 가져올 폴더의 ID입니다. 기본값은 모든 링크를 가져오는 "ALL_LINKS_ID"입니다.
 * @returns 훅의 반환 객체입니다.
 * @returns return.execute - 링크 데이터를 수동으로 가져오는 함수입니다.
 * @returns return.loading - 링크 데이터를 가져오는 요청의 로딩 상태입니다.
 * @returns return.error - 링크 데이터를 가져오는 요청 중 발생한 오류입니다.
 * @returns return.data - 매핑된 링크 데이터 배열입니다.
 * @returns return.data[].id - 링크의 고유 ID입니다.
 * @returns return.data[].createdAt - 링크 생성 일자입니다.
 * @returns return.data[].updatedAt - 링크 업데이트 일자입니다.
 * @returns return.data[].url - 링크 URL입니다.
 * @returns return.data[].imageSource - 링크 이미지 소스입니다.
 * @returns return.data[].title - 링크의 제목입니다.
 * @returns return.data[].description - 링크의 설명입니다.
 * @returns return.data[].elapsedTime - 링크 생성 이후 경과 시간입니다.
 *
 * @example
 * const { execute, loading, error, data } = useGetLinks("folderId");
 *
 * useEffect(() => {
 *   execute();
 * }, [execute]);
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
 *     {data.map(link => (
 *       <div key={link.id}>
 *         <h1>{link.title}</h1>
 *         <p>{link.description}</p>
 *         <a href={link.url}>{link.url}</a>
 *       </div>
 *     ))}
 *   </div>
 * );
 */
export const useGetLinks = (folderId?: SelectedFolderId) => {
  const path =
    folderId === ALL_LINKS_ID ? "/links" : `/folders/${folderId}/links`;
  const getLinks = useCallback(() => instance.get<LinkRawData[]>(path), [path]);

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getLinks", folderId],
    queryFn: getLinks,
    enabled: !!folderId,
  });

  const linksData = data?.data?.map(formatLinkRawData).map(mapLinksData) ?? [];

  return { isLoading, error, data: linksData, refetch };
};
