import React from "react";

export default function Music(props) {
  return (
    <div className="Music mt-4">
      <div>You searched for {props.query}</div>
      <div>You chose this color {props.color}</div>
    </div>
  );
}
