import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLoader = ({ closeAfter = 1, redirectTo = "" }) => {
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
      }, closeAfter * 1000);
    }

    return () => clearTimeout(timerId);
  }, [closeAfter, isLoading, redirectTo, navigate]);

  return [isLoading, setIsLoading];
};

export { useLoader };
