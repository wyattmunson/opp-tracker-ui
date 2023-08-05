import { useStoreState } from "easy-peasy";
import { useState, useEffect } from "react";
import Api from "../../../api/api";
import ActionItemForm from "./actionItemForm/ActionItemForm";

const CreateActionItem = () => {
  const { opps, currentOpportunity } = useStoreState((state) => state);
  //   // check if is edit/view mode
  const pathArray = window.location.pathname.split("/");
  //   console.log("PATH ARRAY", pathArray);
  const [editMode] = useState(pathArray.length > 3 ? true : false);
  //   console.log("VIEW MODE", editMode);

  const [actionItemSaved, setActionItemSaved] = useState(null);
  const [saveError, setSaveError] = useState(null);
  const [validationError, setValidationError] = useState(null);
  const [opportunityId, setOpportunityId] = useState(
    currentOpportunity.opportunityId
  );
  const [currenActionItem, setCurrentActionItem] = useState(null);
  // REFACTOR: state does not need to be updated here
  const [actionItemId, setActionItemId] = useState(pathArray[4]);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    if (editMode) {
      const currItem = currentOpportunity.actionItems.find(
        (x) => x.actionItemId.toString() === actionItemId
      );
      setCurrentActionItem(currItem);
    }
  }, []);

  const saveRecord = (e) => {
    // CHECK VALIDATION
    if (!e.item) {
      setValidationError(true);
      return;
    } else {
      // clear validation error
      setValidationError(false);
    }
    // API CALL
    Api.createActionItem(e)
      .then(() => {
        setActionItemSaved(true);
      })
      .catch((err) => {
        console.error("Failed to create call:", err);
        setSaveError(true);
      });
  };

  const updateRecord = (e) => {
    Api.updateActionItem(e)
      .then((res) => {
        setActionItemSaved(true);
      })
      .catch((err) => {
        console.error("Failed to update call:", err);
        setSaveError(true);
      });
  };

  return (
    <div className="createCallContainer">
      <h2>{editMode ? "Update Action Item" : "Create Action Item"}</h2>
      {/* {callSaved && <span>Call Saved</span>}
      {callUpdated && <span>Call Updated</span>}
      {saveError && <span>Failed to Save</span>}
      {updateError && <span>Failed to Update</span>}
      {validationError && <span>Opportunity must be selected.</span>} */}
      <ActionItemForm
        saveActionItem={(e) => saveRecord(e)}
        opportunity={opportunityId}
        // updateCall={(e) => updateRecord(e)}
        editMode={editMode}
        values={currenActionItem}
        updateActionItem={(e) => updateRecord(e)}
        people={currentOpportunity.people}
        saveSuccess={setActionItemSaved}
        saveFailure={setSaveError}
      />
      {/* <SaveNotification updateError={updateError} saved={actionItemSaved} /> */}
    </div>
  );
};

const SaveNotification = ({ updateError, saved }) => {
  let errorText = "";
  if (!updateError && !saved) errorText = "Not saved";
  if (updateError) errorText = "Failed to update";
  if (saved) errorText = "Saved";
  return (
    <div>
      <p>{errorText}</p>
    </div>
  );
};

export default CreateActionItem;
