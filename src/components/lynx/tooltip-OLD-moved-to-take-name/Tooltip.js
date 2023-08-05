import React, { useState } from "react";

const Tooltip = () => {
  const [hover, setHover] = useState();
  const tooltipStyle = {
    display: hover ? "block" : "none",
  };
  return (
    <div>
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        ?
      </div>
      <div>
        <div style={tooltipStyle}>Tooltip Text</div>
      </div>
    </div>
  );
};

export default Tooltip;
