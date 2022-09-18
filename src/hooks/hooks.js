import { useState } from "react";

const useHttp = ({ url, method = "GET" }) => {
  const [postResponse, setPostResponse] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (items) => {
    setIsError(false);
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

        if (method === "POST") {
          setPostResponse(data);
        }

        return data;
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, { postResponse, isError, isLoading }];
};

const useValidation = (isValid) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = isValid(inputValue);
  const hasError = !valueIsValid && isTouched;

  return [inputValue, hasError, setInputValue, setIsTouched];
};

export { useHttp, useValidation };
