import { useState } from "react";
import CreateOppForm from "./createOppForm/CreateOppForm";
const CreateOpp = () => {
  const [account, setAccount] = useState(null);
  const [modules, setModules] = useState(null);
  const [stage, setStage] = useState(null);
  const [accountExecutive, setAccountExecutive] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [demoDate, setDemoDate] = useState(null);
  const [povKickoffDate, setPovKickoffDate] = useState(null);
  const [oppSaved, setOppSaved] = useState(null);
  const [saveError, setSaveError] = useState(null);
  const [validationError, setValidationError] = useState(null);

  const saveOpp = (e) => {
    // validate input
    if (!e.account) {
      setValidationError("account name");
      return;
    } else if (!e.startDate) {
      setValidationError("start date");
      return;
    } else {
      setValidationError(false);
    }
    fetch("http://localhost:1515/opps/create", {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setOppSaved(true);
      })
      .catch((err) => {
        console.error("Failed to update call:", err);
        setSaveError(true);
      });
  };
  return (
    <div className="createOppContainer">
      <h3>Create Opp</h3>
      {oppSaved && <span>Opp saved</span>}
      {saveError && <span>Failed to save</span>}
      {validationError && (
        <span className="subtleRedAlert">
          Missing required fields: {validationError}
        </span>
      )}
      <CreateOppForm saveRecord={(e) => saveOpp(e)} />
    </div>
  );
};

export default CreateOpp;
