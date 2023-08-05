import { LinkButton } from "../../../../components";
import DetailHeader from "../../components/DetailHeader";
import CallListItems from "./callListItems/CallListItems";
import { TableHeaderItem } from "../../components/Table";

const OppCallList = ({ calls, oppId }) => {
  if (!calls || calls.length === 0) {
    return (
      <div className="oppContentBlock">
        <div className="row">
          <div className="col">
            <h4>Call History</h4>
          </div>
          <div className="col quickRight">
            <LinkButton
              text="New Call"
              link="/opps/createcall"
              className="btn btn-outline-primary"
            />
          </div>
        </div>
        <p>No calls.</p>
      </div>
    );
  }

  const sortedCall = calls.sort((a, b) => a.date < b.date);

  return (
    <div className="detailBlockContainer">
      <DetailHeader
        text="Call History"
        buttons={
          <div>
            <LinkButton
              text="All Calls"
              link={`/opps/${oppId}/calls/all`}
              className="btn btn-outline-secondary"
            />
            <LinkButton
              text="New Call"
              link="/opps/createcall"
              className="btn btn-outline-primary"
            />
          </div>
        }
      />
      <div className="detailBlockContent">
        <div className="row actionItemListHeader">
          <TableHeaderItem header="Date" colLength="col-1" />
          <TableHeaderItem header="Type" colLength="col-2" />
          <TableHeaderItem header="Title" colLength="col-3" />
          <TableHeaderItem header="Next Steps" colLength="col-4" />
          <TableHeaderItem header="" colLength="col-2" />
        </div>
        <CallListItems calls={calls} oppId={oppId} />
      </div>
    </div>
  );
};

export default OppCallList;
