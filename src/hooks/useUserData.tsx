import { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const controller = new AbortController();

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
        console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return {data, isLoading, error};
};

export default useUserData;
