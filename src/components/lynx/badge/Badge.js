import "./badge.css";

const Badge = ({ children, context, size }) => {
  //   console.log("BADGE PROPS", props);
  // match things
  let className = "badge lynxBadge";
  switch (context) {
    case "primary":
      break;
  }

  if (context === "primary") className += " lynxBadgePrimary";

  // handle font size
  if (size === ".5") className += " lynxFontSizeHalf";
  if (size === ".8") className += " lynxFontSizeEightieth";
  if (size === "2") className += " lynxFontSize2x";
  if (size === "3") className += " lynxFontSize3x";
  if (size === "4") className += " lynxFontSize4x";
  if (size === "5") className += " lynxFontSize5x";
  if (size === "6") className += " lynxFontSize6x";

  //   const { children } = props;
  return <span className={className}>{children}</span>;
};

export default Badge;
