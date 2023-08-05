import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  const [splitPath, setSplitPath] = useState("");
  const [pathname, setPathName] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    setPathName(pathname);
    const splitPath = pathname.split("/");
    setSplitPath(splitPath);
    console.log("SPLIT PATH", splitPath);
    console.log("PATH NAME", pathname);
  }, [window.location.pathname]);

  if (pathname === "/opps") {
    return <Link to="/opps/table">Opps</Link>;
  } else if (splitPath.length === 3) {
    return (
      <div>
        <Link to="/opps/table">Opps</Link> <span> > </span>
        <Link to={`/opps/${splitPath[2]}`}>{splitPath[2]}</Link>
      </div>
    );
  }
  return <Link to="/opps">Opps</Link>;
};

export default BreadCrumbs;
