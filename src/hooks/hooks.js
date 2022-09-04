import { useState } from "react";

const usePostData = () => {
  const [responseDb, setResponseDb] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async (items) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://react-db-8f684-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
        {
          method: "POST",
          body: JSON.stringify(items),
          headers: {
            "Content-type": "application/json",
          },
        }
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

  return { responseDb, isError, isLoading, postData };
};

export { usePostData };
