import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormButton,
  FormInput,
  FormSelect,
  FormTextarea,
} from "../../../../components";
import { progressOptions } from "../../../../config/itemConfig";
import { getSelectOptions } from "../../../../helpers/converters";
import SaveNotification from "../../components/saveNotification/SaveNotification";

const ActionItemForm = ({
  saveActionItem,
  editMode,
  opportunity,
  values,
  updateActionItem,
  people,
  saveSuccess,
  saveError,
}) => {
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [actionItemId, setActionItemId] = useState(null);
  const [actionOwner, setActionOwner] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [completed, setCompleted] = useState(null);
  const [notes, setNotes] = useState(null);
  const [owner, setOwner] = useState(null);
  const [progress, setProgress] = useState(null);
  const [priority, setPriority] = useState(null);

  useEffect(() => {
    if (editMode && values) {
      setItem(values.item);
      setActionOwner(values.actionOwner);
      setDueDate(values.dueDate);
      setCompleted(values.completed);
      setActionItemId(values.actionItemId);
      setNotes(values.notes);
      setOwner(values.owner);
      setPriority(values.priority);
      setProgress(values.progress);
    }
  }, [values]);

  const saveForm = () => {
    const payload = {
      item,
      actionOwner,
      dueDate,
      opportunity,
      completed,
      notes,
      owner,
      priority,
      progress,
    };
    console.log("PAYLOAD TO SAVE", payload);
    if (payload.progress === "completed") payload.completed = true;
    saveActionItem(payload);
  };

  const updateForm = () => {
    const payload = {
      item,
      actionOwner,
      dueDate,
      opportunity,
      actionItemId,
      completed,
      notes,
      owner,
      priority,
      progress,
    };
    if (payload.progress === "completed") {
      console.log("IS COMPLETED");
      payload.completed = true;
    }
    console.log("PAYLOAD TO UPDATE", payload);
    updateActionItem(payload);
  };

  const getDefaultSelect = () => {
    if (!editMode) return null;
    if (!values.owner) return null;

    const { owner } = values;
    const personObj = people.find((x) => x.personId === owner);
    return { value: owner, label: personObj.personName };
  };

  const getDefaultSelectProgress = () => {
    if (!editMode) return null;
    if (!values.progress) return null;

    const { progress } = values;
    const personObj = progressOptions.find((x) => x.value === progress);
    return { value: progress, label: personObj.label };
  };

  const getDefaultDate = () => {
    if (!editMode) return null;
    if (!values.dueDate) return null;

    const date = values.dueDate.split("T")[0];
    return date;
  };

  if (editMode && !values) return <h1>Waiting on values</h1>;

  // values for save notification, remove old vales
  if (values) {
    delete values.followupOwner;
    delete values.actionOwner;
  }
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <FormInput
            noColumns
            label="Item"
            value={item}
            changeCallback={setItem}
          />
        </div>
        <div className="col-4">
          <FormInput
            noColumns
            label="Due Date"
            value={getDefaultDate()}
            inputType="date"
            changeCallback={setDueDate}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormSelect
            label="Owner"
            options={getSelectOptions(people, "personId", "personName")}
            onChange={(e) => setOwner(e)}
            defaultValue={getDefaultSelect()}
          />
        </div>
        {/* <div className="col-3">

        </div> */}
        <div className="col">
          <div className="row">
            <label className="labelMargin">Priority</label>
            <div className="btn-group">
              <FormButton
                className={priority === 1 ? "btn-danger" : "btn-outline-danger"}
                text={1}
                clickAction={() => setPriority(1)}
              />
              <FormButton
                className={
                  priority === 2 ? "btn-warning" : "btn-outline-warning"
                }
                text={2}
                clickAction={() => setPriority(2)}
              />
              <FormButton
                className={
                  priority === 3 ? "btn-primary" : "btn-outline-primary"
                }
                text={3}
                clickAction={() => setPriority(3)}
              />
            </div>
          </div>
        </div>
        <div className="col completeButton">
          <FormSelect
            label="Status"
            options={progressOptions}
            onChange={(e) => setProgress(e)}
            defaultValue={getDefaultSelectProgress()}
          />
        </div>
      </div>
      <FormTextarea
        onChange={(e) => setNotes(e)}
        value={notes}
        label="Item Notes"
      />
      <SaveNotification
        saveSuccess={saveSuccess}
        saveError={saveError}
        originalValues={values}
        editMode={editMode}
        currentValues={{
          dueDate,
          owner,
          completed,
          item,
          notes,
          opportunity: parseInt(opportunity),
          owner,
          priority,
          progress,
          actionItemId: values?.actionItemId,
        }}
      />

      <div className="d-grid gap-2">
        <FormButton
          className="btn-outline-primary"
          text={editMode ? "Update Action Item" : "Save Record"}
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

export default ActionItemForm;
