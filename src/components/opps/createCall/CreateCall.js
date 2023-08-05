import { useStoreState } from "easy-peasy";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SaveNotification from "../components/saveNotification/SaveNotification";
import CallForm from "./callForm/CallForm";

const CreateCall = () => {
  const { opps, currentOpportunity } = useStoreState((state) => state);
  // check if is edit/view mode
  const pathArray = window.location.pathname.split("/");
  const [editMode] = useState(pathArray.length > 3 ? true : false);

  const [callSaved, setCallSaved] = useState(null);
  const [saveError, setSaveError] = useState(null);
  const [validationError, setValidationError] = useState(null);
  const [opportunityId, setOpportunityId] = useState(
    currentOpportunity.opportunityId
  );
  const [callId, setCallId] = useState(pathArray[4]);
  const [currentCallDetails, setCurrentCallDetails] = useState(null);
  const [callUpdated, setCallUpdated] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (editMode) {
      // fetch current opp details
      // get from path if exists
      setOpportunityId(pathArray[2]);
      setCallId(pathArray[4]);
      const currentCall = currentOpportunity.calls.find(
        (x) => x.callId.toString() === callId
      );
      setCurrentCallDetails(currentCall);
    }

    // get opp id from state, if exists
    if (currentOpportunity.opportunityId && !editMode) {
      setCurrentCallDetails({ opportunity: parseInt(opportunityId) });
    }
  }, []);

  const saveRecord = (e) => {
    // CHECK VALIDATION
    if (!e.opportunity) {
      setValidationError(true);
      return;
    } else {
      // clear validation error
      setValidationError(false);
    }

    // API CALL
    fetch("http://localhost:1515/opps/calls/create", {
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
        console.log("SAVE CALL RES", res);
        setCallSaved(true);
        // redirect user to previous page on successful save
        navigate(-1);
      })
      .catch((err) => {
        console.error("Failed to create call:", err);
        setSaveError(true);
      });
  };

  const updateRecord = (e) => {
    console.log("FIRING UPDATE API CALL");
    fetch("http://localhost:1515/opps/calls/update", {
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
        setCallSaved(true);
      })
      .catch((err) => {
        console.error("Failed to update call:", err);
        setSaveError(true);
      });
  };

  return (
    <div className="editItemContainer whiteBoxShadow">
      <h2>{editMode ? "Update Call" : "New Call"}</h2>
      {validationError && <span>Opportunity must be selected.</span>}
      <CallForm
        saveCall={(e) => saveRecord(e)}
        updateCall={(e) => updateRecord(e)}
        editMode={editMode}
        values={currentCallDetails}
        saveError={saveError}
        callSaved={callSaved}
      />
    </div>
  );
};

export default CreateCall;
