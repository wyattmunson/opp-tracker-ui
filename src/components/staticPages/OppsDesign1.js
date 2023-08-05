import { useState } from "react";
import { FormTextarea } from "../../components";

const OppsDesign = () => {
  const [content, setContent] = useState(null);

  const getGuests = () => {
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
      callDetails[1].split("⋅")[0].split(", ")[1] +
      " " +
      new Date().getFullYear();

    const attendeeList = attendeeDetails.filter((x) => {
      console.log(x);
      //   const attendees = []
      if (x === "" || x === "Organizer" || x === "Optional" || x === "\ue313") {
        return;
      }
      return x;
    });
    console.log("TITLE!", title);
    console.log("DATE!", date);
    console.log("ATTENDEE LIST!", attendeeList);
  };
  return (
    <div>
      <h1>Opps</h1>
      <pre>{JSON.stringify(content, null, 2)}</pre>
      {content}
      {getGuests()}
      <div className="detailBlockContainer">
        <CommonDetailHeader
          text="Call History"
          buttons={<button className="btn btn-outline-primary">Test</button>}
        />
        <div className="detailBlockContent">
          <p>Table</p>
        </div>
        <FormTextarea label="Cal Content" onChange={setContent} />
      </div>
    </div>
  );
};

const CommonDetailHeader = ({ text, buttons }) => {
  return (
    <div className="detailBlockHeader">
      <div className="row detailBlockHeaderRow">
        <div className="col">
          <h5>
            <b>{text}</b>
          </h5>
        </div>
        <div className="col quickRight">{buttons}</div>
      </div>
    </div>
  );
};

export default OppsDesign;
