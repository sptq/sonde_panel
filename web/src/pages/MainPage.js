import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Paperbase from "../components/Paperbase";

export const MainPage = () => {
  const isLogged = useSelector(state => state.user.isLogged);

  return isLogged ? <Paperbase /> : <Navigate to={'/sign-in'} replace />
}