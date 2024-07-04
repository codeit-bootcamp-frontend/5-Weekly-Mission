import { instance } from "../util";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCallback } from "react";

/**
 * useCheckEmailDuplicate 훅은 이메일 중복 확인을 위한 비동기 요청을 처리합니다.
 *
 * @param email - 중복 확인할 이메일 주소입니다.
 * @returns 훅의 반환 객체입니다.
 * @returns return.execute - 이메일 중복 확인을 실행하는 함수입니다.
 * @returns return.loading - 이메일 중복 확인 요청의 로딩 상태입니다.
 * @returns return.error - 이메일 중복 확인 요청 중 발생한 오류입니다.
 * @returns return.data - 이메일 중복 확인 응답 데이터입니다.
 *
 * @example
 * const { execute, loading, error, data } = useCheckEmailDuplicate("example@example.com");
 *
 * useEffect(() => {
 *   execute();
 * }, [execute]);
 */
export const useCheckEmailDuplicate = (email: string) => {
  const checkEmailDuplicate = useCallback(
    () =>
      instance.post<Response>("/users/check-email", {
        email,
      }),
    [email]
  );
  const { data, error, isLoading, refetch } = useQuery<
    { data: Response },
    AxiosError
  >({
    queryKey: ["check-email"],
    queryFn: checkEmailDuplicate,
    enabled: false,
    retry: false,
    networkMode: "always",
  });

  return {
    refetch,
    isLoading,
    error,
    data,
  };
};
