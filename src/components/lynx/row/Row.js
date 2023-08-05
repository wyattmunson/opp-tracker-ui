const Row = ({ children, centered, className }) => {
  let classNameComposed = "row";
  if (className) classNameComposed += " " + className;
  if (centered) classNameComposed += " lynxCenter";
  return <div className={classNameComposed}>{children}</div>;
};

export default Row;
