import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const useGetUnreadNotifications = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["unread-notifications"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${BASE_URL}/admin/notification/unread`,
        { withCredentials: true }
      );
      return data;
    },
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isLoading, data, error };
};

export const useGetAllNotifications = ({ currentPage, status }) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["notifications", currentPage, status],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/admin/notification/all`, {
        withCredentials: true,
        params: {
          currentPage,
          status,
        },
      });
      return data;
    },
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isLoading, data, error };
};
