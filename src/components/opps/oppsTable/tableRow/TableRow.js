import { Link } from "react-router-dom";
import OppHeader from "../../oppDetail/oppHeader/OppHeader";

const TableRow = ({
  account,
  startDate,
  stage,
  accountExecutive,
  opportunityId,
  modules,
  demoDate,
  povKickoffDate,
}) => {
  return (
    <div className="tableRowContainer">
      <Link to={`/opps/${opportunityId}`} className="noUnderscore">
        <h4>{account}</h4>
      </Link>
      <OppHeader
        startDate={startDate}
        modules={modules}
        stage={stage}
        accountExecutive={accountExecutive}
        demoDate={demoDate}
        povKickoffDate={povKickoffDate}
      />
    </div>
  );
};

export default TableRow;
