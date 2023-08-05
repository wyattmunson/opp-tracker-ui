import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormButton,
  FormInput,
  FormTextarea,
  FormSelect,
} from "../../../../components";
import { getSelectOptions } from "../../../../helpers/converters";

const CreatePersonForm = ({ saveRecord, updateRecord, editMode, values }) => {
  const navigate = useNavigate();
  const { opps } = useStoreState((state) => state);
  const [item, setItem] = useState(null);
  const [actionItemId, setActionItemId] = useState(null);
  const [actionOwner, setActionOwner] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [completed, setCompleted] = useState(null);
  const [notes, setNotes] = useState(null);

  const [personId, setPersonId] = useState("");
  const [personName, setPersonName] = useState("");
  const [title, setTitle] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [opportunity, setOpportunity] = useState("");
  const [email, setEmail] = useState("");
  const [internal, setInternal] = useState(false);

  useEffect(() => {
    if (editMode && values) {
      setPersonId(values.personId);
      setPersonName(values.personName);
      setTitle(values.title);
      setSupervisor(values.supervisor);
      setOpportunity(values.opportunity);
      setEmail(values.email);
      setInternal(values.internal);
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

  const saveForm = () => {
    const payload = {
      personName,
      title,
      supervisor,
      opportunity,
      email,
      internal,
    };
    console.log("PAYLOAD TO SAVE", payload);
    saveRecord(payload);
  };

  const updateForm = () => {
    const payload = {
      personId,
      personName,
      title,
      supervisor,
      opportunity,
      email,
      internal,
    };
    console.log("PAYLOAD TO UPDATE", payload);
    updateRecord(payload);
  };

  const getDefaultDate = () => {
    if (!editMode) return null;
    if (!values.dueDate) return null;

    const date = values.dueDate.split("T")[0];
    return date;
  };

  if (editMode && !values) return <h1>Waiting on values</h1>;
  if (!editMode && !values) return <h1>Waiting on values to create</h1>;

  if (editMode && !values) return <h1>Waiting on values</h1>;
  return (
    <div>
      <div className="row">
        <div className="col">
          <FormInput
            noColumns
            label="Name"
            changeCallback={setPersonName}
            value={personName}
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="Title"
            value={title}
            changeCallback={setTitle}
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="Supervisor"
            value={supervisor}
            changeCallback={setSupervisor}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormInput
            noColumns
            label="Email"
            changeCallback={setEmail}
            value={email}
          />
        </div>
        <div className="col">
          <FormSelect
            label="Opportunity"
            options={getSelectOptions(opps, "opportunityId", "account")}
            onChange={(e) => setOpportunity(e)}
            defaultValue={getDefaultOppSelect()}
          />
        </div>
        <div className="col completeButton">
          <FormButton
            className={internal ? "btn-secondary" : "btn-outline-secondary"}
            text={internal ? "Unset Internal" : "Set Internal"}
            clickAction={() => setInternal(!internal)}
          />
        </div>
      </div>
      <div className="d-grid gap-2">
        <FormButton
          className="btn-outline-primary"
          text={editMode ? "Update Person" : "Save Record"}
          clickAction={editMode ? updateForm : saveForm}
        />
        <FormButton
          className="btn-outline-secondary"
          text="Back"
          clickAction={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default CreatePersonForm;
