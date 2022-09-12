import { useState } from "react";

const useHttp = (url, method = "GET") => {
  const [responseDb, setResponseDb] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (items) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        url,
        method === "POST"
          ? {
              method,
              body: JSON.stringify(items),
              headers: {
                "Content-type": "application/json",
              },
            }
          : {}
      );

      if (response.ok) {
        const data = await response.json();

        setResponseDb(data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { responseDb, isError, isLoading, fetchData };
};

export { useHttp };
