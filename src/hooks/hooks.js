import { useEffect, useState } from "react";

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
        method === "POST" || "PUT"
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

        if (method === "POST" || "PUT") {
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

  return [inputValue, hasError, valueIsValid, setInputValue, setIsTouched];
};

const useStorage = (key) => {
  const [isExpanded, setIsExpanded] = useState(localStorage.getItem(key) || true);

  useEffect(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      setIsExpanded(JSON.parse(storedData));
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, isExpanded);
  }, [isExpanded, key]);

  return [isExpanded, setIsExpanded];
};

export { useHttp, useValidation, useStorage };
