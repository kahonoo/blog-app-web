import {axiosInstance} from "@/lib/axios";
import { useAuthStore } from "@/stores/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { User } from "@/types/user";
import { signIn } from "next-auth/react";

interface Payload {
  password: string;
}

const useResetPassword = (token: string) => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: Payload) => {
      const { data } = await axiosInstance.patch<{ message: string }>(
        "/auth/reset-password",
        payload,
        { headers: { authorization: `Bearer ${token}` } }
      );
      return data;
    },
    onSuccess: async (data) => {
      toast.success("reset password success");
      router.replace("/sign-in");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data.message ?? "Something went wrong !");
    },
  });
};

export default useResetPassword;
