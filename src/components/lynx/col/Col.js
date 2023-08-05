const Col = ({ children, centered, grid, className }) => {
  let classNameComposed = "";

  if (grid) {
    classNameComposed = grid;
  } else {
    classNameComposed = "col";
  }
  if (className) classNameComposed += " " + className;

  if (centered) classNameComposed += " lynxCenter";
  return <div className={classNameComposed}>{children}</div>;
};

export default Col;
