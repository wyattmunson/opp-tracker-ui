import { useStoreState } from "easy-peasy";
import { useState, useEffect } from "react";
import {
  FormTextarea,
  FormInput,
  FormButton,
  FormSelect,
} from "../../../../components";
import { getSelectOptions } from "../../../../helpers/converters";
import { callTypeOptions } from "../../../../config/itemConfig";
import { useNavigate } from "react-router-dom";
import AttendeeContainer from "./attendeeContainer/AttendeeContainer";
import PasteCall from "./pasteCall/PasteCall";
import SaveNotification from "../../components/saveNotification/SaveNotification";

const CallForm = ({
  saveCall,
  editMode,
  values,
  updateCall,
  callSaved,
  saveError,
}) => {
  const [opportunity, setOpportunity] = useState(null);
  const [onCall, setOnCall] = useState(null);
  const [date, setDate] = useState(null);
  const [nextSteps, setNextSteps] = useState(null);
  const [gongLink, setGongLink] = useState(null);
  const [callType, setCallType] = useState(null);
  const [notes, setNotes] = useState(null);
  const [callId, setCallId] = useState(null);
  const [callTitle, setCallTitle] = useState(null);
  const [attendeeList, setAttendeeList] = useState([]);

  const { opps, currentOpportunity } = useStoreState((state) => state);
  const { people } = currentOpportunity;

  const navigate = useNavigate();

  useEffect(() => {
    console.log("GOT VALUES", values);
    if (editMode && values) {
      // populate values
      setNextSteps(values.nextSteps);
      setNotes(values.notes);
      setCallType(values.callType);
      setDate(values.date);
      setOnCall(values.onCall);
      setGongLink(values.gongLink);
      setCallId(values.callId);
      setOpportunity(values.opportunity);
      setCallTitle(values.callTitle);
      setAttendeeList(values.attendeeList);
    } else if (!editMode && values) {
      setOpportunity(values.opportunity);
    }
  }, [values]);

  const getDefaultOppSelect = () => {
    // if (!editMode) return null;

    // get opp name
    const oppId = values.opportunity;
    const oppObj = opps.find((x) => oppId === x.opportunityId);
    return { value: oppId, label: oppObj.account };
  };

  const getDefaultCallTypeSelect = () => {
    if (!editMode) return null;

    const callTypeOption = callTypeOptions.find(
      (x) => x.value === values.callType
    );
    return callTypeOption;
  };

  const getDefaultDate = (unformattedDate) => {
    if (!editMode) return null;
    if (!unformattedDate) return null;

    let dater = unformattedDate.split("T")[0];
    return dater;
  };

  const saveRecord = () => {
    const payload = {
      opportunity,
      onCall,
      date,
      nextSteps,
      gongLink,
      callType,
      notes,
      callTitle,
      attendeeList,
    };
    // REFACTOR: this should call action in store
    //           instead of using callback in props
    console.log("SAVE CALL PAYLOAD", payload);
    saveCall(payload);
  };

  const updateRecord = () => {
    const payload = {
      opportunity,
      onCall,
      date,
      nextSteps,
      gongLink,
      callType,
      notes,
      callId,
      callTitle,
      attendeeList,
    };
    console.log("UPDATE CALL PAYLOAD", payload);
    updateCall(payload);
  };

  const getPersonName = (personId) => {
    const personObj = people.find((x) => x.personId === parseInt(personId));

    // handle error
    if (!personId) return null;
    if (!personObj) return null;
    return personObj.personName;
  };

  const removeAttendee = (i) => {
    let newArray = [...attendeeList];
    const index = newArray.indexOf(i);

    if (index > -1) {
      newArray.splice(index, 1);
    }

    setAttendeeList(newArray);
  };

  const manageAttendees = (e) => {
    console.log("CLICKED:", e);
    // add first item to list
    if (!attendeeList) {
      setAttendeeList([e]);
    } else {
      setAttendeeList([e, ...attendeeList]);
    }
  };

  if (editMode && !values) return <h1>Waiting on values</h1>;
  if (!editMode && !values) return <h1>Waiting on values</h1>;

  // remove values for comparison in save notification
  delete values.onCall;
  delete values.internal;

  return (
    <div className="">
      <PasteCall
        people={people}
        insertAttendees={setAttendeeList}
        insertDate={setDate}
        insertTitle={setCallTitle}
      />
      <div className="row">
        <div className="col">
          <FormSelect
            label="Opportunity"
            options={getSelectOptions(opps, "opportunityId", "account")}
            onChange={(e) => setOpportunity(e)}
            defaultValue={getDefaultOppSelect()}
          />
        </div>
        <div className="col">
          <FormSelect
            label="Call Type"
            options={callTypeOptions}
            onChange={(e) => setCallType(e)}
            defaultValue={getDefaultCallTypeSelect()}
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="Date"
            changeCallback={setDate}
            inputType="date"
            value={getDefaultDate(date)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormInput
            noColumns
            label="Call Title"
            changeCallback={setCallTitle}
            value={callTitle}
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="Next Steps"
            changeCallback={setNextSteps}
            value={nextSteps}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormSelect
            options={getSelectOptions(people, "personId", "personName")}
            label="Add attendees"
            onChange={(e) => manageAttendees(e)}
          />
          <AttendeeContainer
            getPersonName={getPersonName}
            removeAttendee={removeAttendee}
            attendeeList={attendeeList}
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="Gong Link"
            changeCallback={setGongLink}
            value={gongLink}
          />
        </div>
      </div>
      <br />
      <FormTextarea
        onChange={(e) => setNotes(e)}
        value={notes}
        label="Call Notes"
      />
      <SaveNotification
        saveError={saveError}
        callSaved={callSaved}
        originalValues={values}
        currentValues={{
          attendeeList,
          callId,
          callTitle,
          callType,
          date,
          gongLink,
          nextSteps,
          notes,
          opportunity,
        }}
      />
      <div className="d-grid gap-2">
        <FormButton
          text={editMode ? "Update Call" : "Save Call"}
          className="btn-outline-primary"
          clickAction={editMode ? updateRecord : saveRecord}
        />

        <FormButton
          noColumn
          text="Back"
          className="btn-outline-secondary"
          clickAction={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default CallForm;
