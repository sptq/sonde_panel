import React from "react";

export const SDRGraph = (props) => {
  const { graph } = props;
  const size  = props.size ? props.size : 6;
  const data = graph.map((item, index) => {
    return <div key={index} style={{background: item.hex, width: size}}>&nbsp;</div>
  });

  return (
    <div style={{display: "flex"}}>
      {data}
    </div>
  );
}