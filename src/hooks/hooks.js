import { useEffect, useState } from "react";
import { transformData } from "../utils/utils";

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

        return transformData(data);
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
  const [isInputValid, setIsInputValid] = useState(false);
  const [isInputTouched, setIsInputTouched] = useState(false);

  useEffect(() => {
    if (isValid(inputValue)) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  }, [inputValue, isValid]);

  const isError = !isInputValid && isInputTouched;

  return [inputValue, isError, setInputValue, setIsInputTouched];
};

export { useHttp, useValidation };
