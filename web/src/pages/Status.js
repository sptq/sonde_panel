import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { apiGet } from "../helpers/api";

export const Status = () => {
  const [data, setData] = useState();
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    let isMounted = true;
    let interval = setInterval(() => {
      if (isMounted) {
        apiGet('/api/station/stats', token)
          .then((data) => setData(data));
      }
    }, 1000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const countPercentage = (count, total) => {
    const percentage = (parseInt(count) / parseInt(total)) * 100;
    return percentage.toFixed(2);
  }

  return data ? (
    <div>
      <Paper style={{margin: 16}}>
        <h1>Uptime</h1>
        {data.uptime}
        <br/>
        <br/>
      </Paper>

      <Paper style={{margin: 16}}>
        <h1>Pamięć</h1>
        <b>Total:</b> &nbsp; {data.memory.total} MB <br/>
        <b>Used:</b> &nbsp; {data.memory.used} MB &nbsp; &nbsp;  {countPercentage(data.memory.used, data.memory.total)}%<br/>
        <b>Free:</b> &nbsp; {data.memory.free} MB &nbsp; &nbsp;  {countPercentage(data.memory.free, data.memory.total)}%<br/>
        <b>Shared:</b> &nbsp; {data.memory.shared} MB &nbsp; &nbsp;  {countPercentage(data.memory.shared, data.memory.total)}%<br/>
        <b>Buff cache:</b> &nbsp; {data.memory.buff_cache} MB &nbsp; &nbsp;  {countPercentage(data.memory.buff_cache, data.memory.total)}%<br/>
        <b>Available:</b> &nbsp; {data.memory.available} MB &nbsp; &nbsp;  {countPercentage(data.memory.available, data.memory.total)}%<br/>
        <br/>
      </Paper>
    </div>
  ): null;
}