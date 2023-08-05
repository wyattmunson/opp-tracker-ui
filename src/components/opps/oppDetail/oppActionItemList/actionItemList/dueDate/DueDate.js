import moment from "moment";

const DueDate = ({ dueDate, completed }) => {
  const today = new Date();
  dueDate = new Date(dueDate);

  const checkToday =
    today.toString().slice(4, 15) === dueDate.toString().slice(4, 15);

  if (!dueDate) return <span>No due date</span>;

  let className = "";
  if (completed) className = "listItemInactive";

  if (checkToday && !completed) {
    return (
      <span className="subtleOrangeAlert">
        {moment(dueDate).format("ll")} (Today)
      </span>
    );
  }

  if (today > dueDate && !completed) className = "subtleRedAlert";

  return (
    <span className={className}>
      {moment(dueDate).format("ll")} ({moment(dueDate).fromNow()})
    </span>
  );
};

export default DueDate;
