import { useStoreActions, useStoreState } from "easy-peasy";
import moment from "moment";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { actionItemStatusStages } from "../../../config/itemConfig";
import {
  BadgeRender,
  DataPointIcon,
  NotesContainer,
} from "../../lynx/dataRendering/DataRendering";

const MyActionitems = () => {
  const { getMyActionItems } = useStoreActions((actions) => actions);
  const { myActionItems } = useStoreState((state) => state);

  useEffect(() => {
    getMyActionItems();
  }, []);

  if (!myActionItems) {
    return <h3>No action items</h3>;
  }

  return (
    <div>
      <h3>My action items</h3>
      <ActionItemTable />
      <ActionItemList />
    </div>
  );
};

const ActionItemTable = () => {
  const { myActionItems } = useStoreState((state) => state);
  if (!myActionItems) return null;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Status</th>
          <th scope="col">Priority</th>
          <th scope="col">Account</th>
          <th scope="col">Item</th>
          <th scope="col">Due Date</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {myActionItems.map((i) => (
          <ActionItemTableRow i={i} />
        ))}
      </tbody>
    </table>
  );
};

const ActionItemTableRow = ({ i }) => {
  return (
    <tr>
      <td>{actionItemStatusStages[i.progress]}</td>
      <StatusIcon progress={i.priority} />
      <td>
        <Link to={`/opps/${i.opportunity}`}>{i.account}</Link>
      </td>
      <td>
        <Link to={`/opps/${i.opportunity}/actionitems/${i.actionItemId}`}>
          {i.item}
        </Link>
      </td>
      <td>{moment(i.dueDate).format("ll")}</td>
      <td>{i.status}</td>
    </tr>
  );
};

const ActionItemList = () => {
  const { myActionItems } = useStoreState((state) => state);

  if (!myActionItems) return null;
  console.log(myActionItems);
  return (
    <div>
      <h6>List</h6>
      {myActionItems.map((i) => (
        <ActionItemListItem i={i} />
      ))}
    </div>
  );
};

const ActionItemListItem = ({ i }) => {
  return (
    <div className="allItemsContainer">
      <Link to={`/opps/${i.opportunity}/actionitems/${i.actionItemId}`}>
        <h4>{i.item}</h4>
      </Link>
      <DataPointIcon
        data={moment(i.dueDate).format("ll")}
        icon="far fa-calendar"
      />
      <BadgeRender data={actionItemStatusStages[i.progress]} />
      <div>
        <NotesContainer notes={i.notes} />
      </div>
    </div>
  );
};

const StatusIcon = ({ progress }) => {
  const getClassName = () => {
    if (progress === 1) {
      return "bg-danger";
    } else if (progress === 2) {
      return "bg-warning";
    } else {
      return "bg-primary";
    }
  };
  return <div className={`badge ${getClassName()}`}>{progress}</div>;
};

export default MyActionitems;
