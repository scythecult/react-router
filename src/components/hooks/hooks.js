import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FIRE_DB_QUOTES } from "../../constants/fire-db";
import { transformResponse } from "../../utils/utils";

const useLoader = ({ hideAfter = 1, redirectTo = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timerId;

    if (isLoading) {
      timerId = setTimeout(() => {
        setIsLoading(false);

        if (redirectTo) {
          navigate(redirectTo);
        }
      }, hideAfter * 1000);
    }

    return () => clearTimeout(timerId);
  }, [hideAfter, isLoading, redirectTo, navigate]);

  return [isLoading, setIsLoading];
};

const useValidation = (isValid) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = isValid(inputValue);
  const hasError = !valueIsValid && isTouched;

  return [inputValue, hasError, valueIsValid, setInputValue, setIsTouched];
};

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

const useFireDb = ({ url, transform }) => {
  const [items, setItems] = useState([]);
  const [getItems, { isLoading }] = useHttp({
    url,
  });

  useEffect(() => {
    let wasSended = false;

    getItems().then((response) => {
      if (response && wasSended) {
        const transformedQuotes = transform(response);
        setItems(transformedQuotes);
      }
    });

    return () => (wasSended = true);
  }, []);

  return [items, isLoading];
};

export { useLoader, useValidation, useHttp, useFireDb };
