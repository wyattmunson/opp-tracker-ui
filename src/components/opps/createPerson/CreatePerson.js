import { useState, useEffect } from "react";
import { useStoreState } from "easy-peasy";
import Api from "../../../api/api";
import CreatePersonForm from "./createPersonForm/CreatePersonForm";
import { useNavigate } from "react-router-dom";
const CreatePerson = () => {
  // form state
  const { currentOpportunity, people } = useStoreState((state) => state);
  const { opportunityId } = currentOpportunity;
  const pathArray = window.location.pathname.split("/");
  const [editMode] = useState(pathArray.length > 3 ? true : false);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [personId, setPersonId] = useState(pathArray[4]);

  // all people mode
  const allPeople = pathArray[2] === "people" ? true : false;

  // save status
  const [oppSaved, setOppSaved] = useState(null);
  const [saveError, setSaveError] = useState(null);
  const [validationError, setValidationError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (editMode && !allPeople) {
      const currItem = currentOpportunity.people.find(
        (x) => x.personId.toString() === personId
      );
      setCurrentPerson(currItem);
    }

    if (allPeople) {
      const currItem = people.find((x) => x.personId.toString() === personId);
      setCurrentPerson(currItem);
    }

    // get opp id from state, if exists
    // or there are no values to pass to form (new form)
    if (currentOpportunity.opportunityId && !editMode) {
      setCurrentPerson({ opportunity: parseInt(opportunityId) });
    }
  }, []);

  const savePerson = (e) => {
    // validate input
    if (!e.personName) {
      setValidationError("personName");
      return;
    } else {
      setValidationError(false);
    }
    Api.createPerson(e)
      .then((res) => {
        setOppSaved(true);
        navigate(-1);
      })
      .catch((err) => {
        console.error("Failed to update call:", err);
        setSaveError(true);
      });
  };

  const updateRecord = (e) => {
    Api.updatePerson(e)
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
      <h3>{editMode ? "Update Person" : "Create Person"}</h3>
      {oppSaved && <span>Person saved</span>}
      {saveError && <span>Failed to save</span>}
      {validationError && (
        <span className="subtleRedAlert">
          Missing required fields: {validationError}
        </span>
      )}

      <CreatePersonForm
        saveRecord={(e) => savePerson(e)}
        updateRecord={(e) => updateRecord(e)}
        editMode={editMode}
        values={currentPerson}
        opportunity={opportunityId}
      />
    </div>
  );
};

export default CreatePerson;
