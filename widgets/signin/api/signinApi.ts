import apiInstance from "@/shared/model/axios";

export const signinApi = async (data: { email: string; password: string }) => {
  const res = await apiInstance.post("sign-in", data);
  if (!res) return;
  return res.data;
};
