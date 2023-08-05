import { useStoreState } from "easy-peasy";
import moment from "moment";
import { callTypeOptions } from "../../../../../config/itemConfig";
import AttendeeContainer from "../../../createCall/callForm/attendeeContainer/AttendeeContainer";
import { Link } from "react-router-dom";
import {
  NotesContainer,
  DataPointIcon,
} from "../../../../lynx/dataRendering/DataRendering";
const AllCalls = () => {
  const { currentOpportunity } = useStoreState((state) => state);
  const { people } = currentOpportunity;

  const getPersonName = (personId) => {
    const personObj = people.find((x) => x.personId === parseInt(personId));

    // handle error
    if (!personId) return null;
    if (!personObj) return null;
    return personObj.personName;
  };

  return (
    <div>
      <h2>All Calls</h2>
      {currentOpportunity.calls.map((i) => (
        <div className="allItemsContainer">
          <Link
            to={`/opps/${currentOpportunity.opportunityId}/calls/${i.callId}`}
          >
            <h4>{i.callTitle}</h4>
          </Link>
          <div className="dateRow">
            <DataPointIcon
              data={moment(i.date).format("ll")}
              icon="far fa-calendar"
            />
            <CallType type={i.callType} />
          </div>
          <div className="attendeeRow">
            <AttendeeContainer
              attendeeList={i.attendeeList}
              getPersonName={getPersonName}
            />
          </div>
          <NextSteps nextSteps={i.nextSteps} />
          <div>
            <NotesContainer notes={i.notes} />
          </div>
        </div>
      ))}
      <div className="lgRowContainer"></div>
      <pre>{JSON.stringify(currentOpportunity, null, 2)}</pre>
    </div>
  );
};

const NextSteps = ({ nextSteps }) => {
  if (!nextSteps) return <i>No next steps.</i>;
  return (
    <p>
      <u>Next steps</u>: {nextSteps}
    </p>
  );
};

const CallType = ({ type }) => {
  if (!type) return null;
  const callObj = callTypeOptions.find((x) => x.value === type);
  return <span className="badge bg-primary">{callObj.label}</span>;
};

export default AllCalls;
