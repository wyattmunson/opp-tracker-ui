import { FormButton, FormTextarea } from "../../../../../components";
import { useEffect, useState } from "react";
import AttendeeContainer from "../attendeeContainer/AttendeeContainer";

const PasteCall = ({ people, insertTitle, insertDate, insertAttendees }) => {
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [attendees, setAttendees] = useState(null);
  const [date, setDate] = useState(null);
  const [showPaste, setShowPaste] = useState(false);

  useEffect(() => {
    handlePaste();
  }, [content]);

  const handlePaste = () => {
    if (!content) return null;
    const cal = content.split("");
    console.log("GUEST CONTENT", cal);
    const callDetails = cal[0].split("\n");
    const attendeeDetails = cal[cal.length - 1].split("\n");
    console.log("CALL DETAILS", callDetails);
    console.log("ATTEND DETAILS", attendeeDetails);

    // const splitCall =

    const title = callDetails[0];
    const date =
      callDetails[1]?.split("⋅")[0].split(", ")[1] +
      " " +
      new Date().getFullYear();

    const attendeeStringList = attendeeDetails.filter((x) => {
      console.log(x);
      //   const attendees = []
      if (x === "" || x === "Organizer" || x === "Optional" || x === "\ue313") {
        return;
      }
      return x;
    });

    const attendeeList = [];

    // matches names/email to people objects
    attendeeStringList.forEach((x) => {
      // check by name
      let attendee = people.find((i) => i.personName === x);
      if (!attendee) attendee = people.find((i) => i.email === x);
      if (!attendee) {
        console.log("COULD NOT FIND", attendee);
        return;
      }
      attendeeList.push(attendee.personId);
      //   console.log(attendee);
    });

    setTitle(title);
    setDate(date.split(" ").join("-"));
    setAttendees(attendeeList);

    console.log("TITLE!", title);
    console.log("DATE!", date);
    console.log("ATTENDEE LIST!", attendeeList);
  };

  const getPersonName = (personId) => {
    const personObj = people.find((x) => x.personId === parseInt(personId));

    // handle error
    if (!personId) return null;
    if (!personObj) return null;
    return personObj.personName;
  };

  const submitValues = () => {
    insertAttendees(attendees);
    insertTitle(title);
    insertDate(date);
    setShowPaste(false);
  };

  if (!showPaste) {
    return (
      <div>
        <FormButton
          text="Paste from Google Cal"
          clickAction={() => setShowPaste(!showPaste)}
          className="btn-outline-secondary"
        />
      </div>
    );
  }

  return (
    <div>
      <div>
        <FormButton
          text="Paste from Google Cal"
          clickAction={() => setShowPaste(!showPaste)}
          className="btn-outline-secondary"
        />
      </div>
      <h4>Paste Call</h4>
      <FormTextarea
        label="Paste call from Google Calednar"
        onChange={setContent}
      />
      <p>Title: {title}</p>
      <p>Date: {date}</p>
      <p>Title: {date}</p>
      <AttendeeContainer
        attendeeList={attendees}
        getPersonName={getPersonName}
      />
      <FormButton
        clickAction={submitValues}
        text="Add values to call"
        className="btn-outline-secondary"
      />
      <hr />
    </div>
  );
};

// const AttendeeContainer = ({ attendeeList, getPersonName, removeAttendee }) => {
//   if (!attendeeList) return null;
//   return (
//     <div>
//       {attendeeList.map((i) => (
//         <div className="badge bg-secondary attendeeBadge">
//           {i.personName}{" "}
//           {removeAttendee && (
//             <button
//               className="attendeeCloseButton"
//               onClick={() => removeAttendee(i)}
//             >
//               X
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

export default PasteCall;
