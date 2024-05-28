import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/baseURL";
import { User } from "@/types/interface";

export const useSignIn = async (email: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}sign-in`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) throw new Error("Error post data");
        const data = await response.json();

        // 로그인 성공 시 accessToken 있는지 확인
        if (!data.data.accessToken) {
            throw new Error("No access token in response");
        }

        // 로그인 성공 시 accessToken을 로컬 스토리지에 저장
        localStorage.setItem("accessToken", data.data.accessToken);
        return data;
    } catch (error) {
        throw new Error(`Error login`);
    }
};

export const useSignUp = async (email: string, password: string) => {
    try {
        const response = await fetch(`${BASE_URL}sign-up`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        if (!response.ok) throw new Error("Error post data");
        const data = await response.json();
        // 회원가입 성공 시 accessToken을 로컬 스토리지에 저장
        localStorage.setItem("accessToken", data.accessToken);
        return data;
    } catch (error) {
        throw new Error(`Error signing up: `);
    }
};

export function useCheckEmail(body: any) {
    const [data, setData] = useState<any>(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}check-email`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });
                const data = await response.json();
                setData(data);
                if (response.status === 409) {
                    setStatus("이미 사용 중인 이메일입니다.");
                } else {
                    setStatus("");
                }
            } catch (error) {
                console.error("Error post data:", error);
            }
        };

        if (body.email) {
            fetchData();
        }
    }, [body.email]);

    return [status];
}

export const useFetchUser = () => {
    const [data, setData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("accessToken");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${BASE_URL}users`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }

                const result = await response.json();
                setData(result.data[0]);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
