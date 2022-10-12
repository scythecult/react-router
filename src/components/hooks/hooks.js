import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

export { useLoader, useValidation };
