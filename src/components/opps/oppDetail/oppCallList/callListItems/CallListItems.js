import moment from "moment";
import { LinkButton } from "../../../../../components";
import { callTypeOptions } from "../../../../../config/itemConfig";

const CallListItems = ({ calls, oppId }) => {
  return (
    <>
      {calls.map((i) => (
        <div className="row actionItemListItem">
          <div className="col-1">
            <p>{moment(i.date).format("ll")}</p>
          </div>
          <div className="col-2">
            <CallType type={i.callType} />
          </div>
          <div className="col-3">
            <p>{i.callTitle}</p>
          </div>
          <CallListCell text={i.nextSteps} />
          <div className="col-2 buttonSpacing">
            <p>
              {i.gongLink && (
                <LinkButton
                  className="btn btn-outline-secondary btn-sm gongButton"
                  text="Gong"
                  link={i.gongLink}
                />
              )}
              <LinkButton
                className="btn btn-outline-secondary btn-sm"
                text="View"
                link={`/opps/${oppId}/calls/${i.callId}`}
              />
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

const CallType = ({ type }) => {
  let currentType = callTypeOptions.find((x) => x.value === type);

  // error handling: if call type does not match - more types added later
  if (!currentType) currentType = { label: type };

  return <span className="badge bg-secondary">{currentType.label}</span>;
};

const CallListCell = ({ text }) => {
  return (
    <div className="col-4">
      <p>{text}</p>
    </div>
  );
};

export default CallListItems;
