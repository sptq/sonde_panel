import {useState, useEffect} from 'react';
import { apiGet } from "./api";
import { useSelector } from "react-redux";

export const useIntervalCall = (url, initValue) => {
  const [data, setData] = useState(initValue);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    let isMounted = true;
    let isBusy = false;

    let interval = setInterval(() => {
      if (isMounted && !isBusy) {
        isBusy = true;
        apiGet(url, token)
          .then((data) => {
            setData(data)
            isBusy = false;
          });
      }
    }, 5000);

    return () => {
      isMounted = false;
      isBusy = false;
      clearInterval(interval);
    };
  }, []);

  return data;
}