import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="text-blue-150 bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;