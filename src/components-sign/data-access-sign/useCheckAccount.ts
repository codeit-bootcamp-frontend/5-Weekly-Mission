import { axiosInstance } from "@/src/components-common/util";

export const checkAccountAlreadyExist = async (
  id: string
): Promise<boolean> => {
  const address = "check-email";
  try {
    const response = await axiosInstance.post(address, { email: id });
    return response.status === 200;
  } catch (error) {
    alert("계정이 이미 존재합니다.");
    return false;
  }
};

export const checkAccountValid = async (
  id: string,
  pwd: string
): Promise<boolean> => {
  const address = "sign-up";
  const account = { email: id, password: pwd };
  try {
    const response = await axiosInstance.post(address, account);
    return response.status === 200;
  } catch (error) {
    alert("계정 정보가 잘못되었습니다.");
    return false;
  }
};
