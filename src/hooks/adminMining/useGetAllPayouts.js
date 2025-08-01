import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetAllPayouts = () => {
  const [loading, setLoading] = useState(false);
  const [payouts, setPayouts] = useState([]);

  const getPayouts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/payout`, {
        withCredentials: true,
      });
      const data = response.data;
      setPayouts(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPayouts();
  }, []);

  const refetch = async () => {
    await getPayouts();
  };

  return { loading, payouts, refetch };
};

export default useGetAllPayouts;
