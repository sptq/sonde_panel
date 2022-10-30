import {useState, useEffect} from 'react';
import { apiGet } from "./api";
import { useSelector } from "react-redux";

export const useIntervalCall = (url, initValue) => {
  const [data, setData] = useState(initValue);
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    let isMounted = true;
    let isBusy = false;

    const fetch = () => {
      apiGet(url, token)
        .then((data) => {
          setData(data)
          isBusy = false;
        });
    }

    let interval = setInterval(() => {
      if (isMounted && !isBusy) {
        isBusy = true;
        fetch();
      }
    }, 5000);

    fetch();

    return () => {
      isMounted = false;
      isBusy = false;
      clearInterval(interval);
    };
  }, []);

  return data;
}