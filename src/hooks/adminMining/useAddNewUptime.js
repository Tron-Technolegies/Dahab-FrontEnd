import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useAddNewUptime = () => {
  const [loading, setLoading] = useState(false);
  const addUptime = async ({ uptime }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/mining/sats/uptime`,
        { uptime },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("successfully added uptime");
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addUptime };
};

export default useAddNewUptime;
