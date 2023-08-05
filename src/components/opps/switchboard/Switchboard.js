import { Link } from "react-router-dom";

const Switchboard = () => {
  return (
    <div className="allPeopleContainer">
      <h2>Opportunity Dashboard</h2>
      <div className="row">
        {linkList.map((i) => (
          <StandardCard title={i.label} path={i.path} icon={i.icon} />
        ))}
      </div>
    </div>
  );
};

const linkList = [
  {
    label: "Opportunities",
    path: "/opps/table",
    icon: "far fa-star",
  },
  {
    label: "Action Items",
    path: "/opps/actionitems/mine",
    icon: "far fa-check-circle",
  },
  {
    label: "People",
    path: "/opps/people",
    icon: "far fa-user-circle",
  },
  {
    label: "Accounts",
    path: "/opps/accounts",
    icon: "far fa-building",
  },
];

const StandardCard = ({ title, body, icon, path }) => {
  return (
    <Link to={path} className="autoWidth">
      <div className="card lynxCard oppSwitchCard ">
        <div className="card-body">
          <h2>{icon && <i className={icon} />}</h2>
          <h5 className="card-title noUnderline">{title}</h5>
          <p className="card-text noUnderline">{body}</p>
        </div>
      </div>
    </Link>
  );
};

export default Switchboard;
