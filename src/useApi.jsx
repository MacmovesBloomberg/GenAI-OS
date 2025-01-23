import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const fetchData = async (url, config = {}) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(url, config);
      setResponse(res.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const postData = async (url, data, config = {}) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(url, data, config);
      setResponse(res.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, fetchData, postData };
};

export default useApi;
