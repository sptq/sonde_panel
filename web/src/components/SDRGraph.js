import React from "react";

export const SDRGraph = (props) => {
  const { graph } = props;

  const data = graph.map((item, index) => {
    return <div key={index} style={{background: item.hex, width: 6}}>&nbsp;</div>
  });

  return (
    <div style={{display: "flex"}}>
      {data}
    </div>
  );
}