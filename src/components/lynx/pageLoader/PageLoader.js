const PageLoader = ({ header }) => {
  return (
    <div className="pageLoaderContainer">
      <span className="lynxCricleLoader" />
      <h3>{header ? header : "Loading"}</h3>
    </div>
  );
};

export default PageLoader;
