import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetAllRevenue = () => {
  const [loading, setLoading] = useState(false);
  const [revenues, setRevenues] = useState([]);

  const getRevenues = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/revenue`, {
        withCredentials: true,
      });
      const data = response.data;
      setRevenues(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRevenues();
  }, []);
  const refetch = async () => {
    await getRevenues();
  };

  return { loading, revenues, refetch };
};

export default useGetAllRevenue;
