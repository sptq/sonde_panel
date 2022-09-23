import React  from "react";
import { SondeCard } from "./SondeCard";

export const SondesCards = (props) => {
  const { rows } = props;

  return rows.map((row) => (
    <SondeCard key={row.name} {...row} />
  ))
}