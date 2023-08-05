export const TableHeaderItem = ({ header, colLength }) => {
  return (
    <div className={colLength ? colLength : "col"}>
      <h6>{header}</h6>
    </div>
  );
};
