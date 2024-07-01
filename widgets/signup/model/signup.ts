import apiInstance from "@/shared/model/axios";

export const signup = async (data: { email: string; password: string }) => {
  try {
    const res = await apiInstance.post("/sign-up", data);
    const { accessToken, refreshToken } = res.data.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    window.location.href = "/folder";
  } catch (err) {
    console.log(err);
  }
};
