import moment from "moment";
import { LinkButton } from "../../../../../components";
import { progressOptions } from "../../../../../config/itemConfig";
import DueDate from "./dueDate/DueDate";
import OwnerData from "./ownerData/OwnerData";

const ActionItemList = ({ actionItems, oppId }) => {
  if (!actionItems) return <p>No action items.</p>;

  if (actionItems.length === 0) {
    return <p>No action items</p>;
  }

  const getInactiveItem = (completed) => {
    if (completed) return "listItemInactive";
    return null;
  };

  return (
    <>
      {actionItems.map((i) => (
        <div
          className={`row actionItemListItem ${getInactiveItem(i.completed)}`}
        >
          <div className="col-2 quickLeft">
            <ProgressData progress={i.progress} />
            {/* <i className={getCompleteIcon(i.completed)} /> */}
          </div>
          <div className="col-1">
            <PriorityData priority={i.priority} completed={i.completed} />
          </div>
          <div className="col-4 firstCol">{i.item}</div>
          <div className="col-2">
            <DueDate dueDate={i.dueDate} completed={i.completed} />
          </div>
          <div className="col-2">
            <OwnerData owner={i.owner} />
          </div>
          <div className="col-1">
            <LinkButton
              link={`/opps/${oppId}/actionitems/${i.actionItemId}`}
              className="btn btn-outline-secondary btn-sm"
              text="View"
            />
          </div>
        </div>
      ))}
    </>
  );
};

const PriorityData = ({ priority, completed }) => {
  if (!priority) return null;
  let className = "";

  if (priority === 1) className = "bg-danger";
  if (priority === 2) className = "bg-warning";
  if (priority === 3) className = "bg-primary";
  if (completed) className = "bg-secondary";

  return <span className={`badge ${className}`}>{priority}</span>;
};

const ProgressData = ({ progress }) => {
  if (!progress) return null;

  const progressObject = progressOptions.find((x) => x.value === progress);
  return (
    <div className={`quickLeft ${progressObject.color}`}>
      {" "}
      <i className={progressObject.className} />
      {progressObject.label}
    </div>
  );
};

export default ActionItemList;
