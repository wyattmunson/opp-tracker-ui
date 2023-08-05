const AttendeeContainer = ({ attendeeList, getPersonName, removeAttendee }) => {
  if (!attendeeList) return null;
  return (
    <div>
      {attendeeList.map((i) => (
        <div className="badge bg-secondary attendeeBadge">
          {getPersonName(i)}{" "}
          {removeAttendee && (
            <button
              className="attendeeCloseButton"
              onClick={() => removeAttendee(i)}
            >
              X
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AttendeeContainer;
