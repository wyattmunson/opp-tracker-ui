import { useState } from "react";
import { useStoreState } from "easy-peasy";
import EditOppForm from "./editOppForm/EditOppForm";

const EditOpp = () => {
  const { currentOpportunity, opps } = useStoreState((state) => state);
  const { opportunityId } = currentOpportunity;
  const oppDetail = opps.find(
    (x) => x.opportunityId.toString() === opportunityId
  );
  const [oppSaved, setOppSaved] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const saveRecord = (e) => {
    // API CALL
    fetch("http://localhost:1515/opps/update", {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        console.log("SAVE CALL RES", res);
        setOppSaved(true);
      })
      .catch((err) => {
        console.error("Failed to create call:", err);
        setSaveError(true);
      });
  };
  console.log("OPP DETAIL", oppDetail);
  return (
    <div>
      <h3>Edit Opp</h3>
      {oppSaved && <span>Opp saved</span>}
      {saveError && <span>Opp failed to save</span>}
      <EditOppForm oppDetail={oppDetail} saveOpp={(e) => saveRecord(e)} />
    </div>
  );
};

export default EditOpp;
