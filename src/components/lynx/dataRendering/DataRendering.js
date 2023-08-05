export const NotesContainer = ({ notes }) => {
  if (!notes) return <i>No notes.</i>;
  return (
    <div>
      <h6>
        <u>Notes</u>:
      </h6>
      <NotesRender notes={notes} />
    </div>
  );
};

export const NotesRender = ({ notes }) => {
  const newText = notes.split("\n").map((str) => {
    if (str.slice(0, 1) === "-")
      return (
        <div className="notesRenderListItem">
          <div>-</div>
          <div className="notesRenderListItemText">{str.slice(2)}</div>
        </div>
      );
    return (
      <div>
        <p>{str}</p>
      </div>
    );
  });
  return newText;
};

export const DataPointIcon = ({ data, icon }) => {
  return (
    <span className="dataPointIcon">
      <i className={icon} /> {data}
    </span>
  );
};

export const BadgeRender = ({ data, className }) => {
  return (
    <span className={className ? className : "badge bg-primary"}>{data}</span>
  );
};
