import { useStoreActions } from "easy-peasy";
import { useState } from "react";
import {
  FormButton,
  FormInput,
  FormTextarea,
} from "../../../../../../components";

const CreateMeddpicForm = () => {
  const { saveMeddpic } = useStoreActions((actions) => actions);
  const [techChamp, setTechChamp] = useState(null);
  const [businessChamp, setBusinessCamp] = useState(null);
  const [economicBuyer, setEconomicBuyer] = useState(null);
  const [technicalPain, setTechnicalPain] = useState("");
  const [businessPain, setBusinessPain] = useState("");
  const [technicalMetrics, setTechnicalMetrics] = useState("");
  const [businessMetrics, setBusinessMetrics] = useState("");
  const [whyAnything, setWhyAnything] = useState("");
  const [whyNow, setWhyNow] = useState("");
  const [whyHarness, setWhyHarness] = useState("");

  const fireSave = () => {
    const payload = {
      techChamp,
      businessChamp,
      economicBuyer,
      technicalPain,
      businessPain,
      technicalMetrics,
      businessMetrics,
      whyAnything,
      whyNow,
      whyHarness,
    };

    saveMeddpic(payload);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <FormInput
            label="Tech Champ"
            noColumns
            value={techChamp}
            changeCallback={setTechChamp}
          />
        </div>
        <div className="col">
          <FormInput
            label="Business Champ"
            noColumns
            value={businessChamp}
            changeCallback={setBusinessCamp}
          />
        </div>
        <div className="col">
          <FormInput
            label="Business Champ"
            noColumns
            value={economicBuyer}
            changeCallback={setEconomicBuyer}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormTextarea
            label="Tech Pain"
            noColumns
            value={technicalPain}
            onChange={setTechnicalPain}
            rows={4}
          />
        </div>
        <div className="col">
          <FormTextarea
            label="Business Pain"
            noColumns
            value={businessPain}
            onChange={setBusinessPain}
            rows={4}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormTextarea
            label="Tech Metrics"
            noColumns
            value={technicalMetrics}
            onChange={setTechnicalMetrics}
            rows={4}
          />
        </div>
        <div className="col">
          <FormTextarea
            label="Business Metrics"
            noColumns
            value={businessMetrics}
            onChange={setBusinessMetrics}
            rows={4}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormTextarea
            label="Why Anything?"
            noColumns
            value={whyAnything}
            onChange={setWhyAnything}
            rows={4}
          />
        </div>
        <div className="col">
          <FormTextarea
            label="Why Now?"
            noColumns
            value={whyNow}
            onChange={setWhyNow}
            rows={4}
          />
        </div>
        <div className="col">
          <FormTextarea
            label="Why Harness?"
            noColumns
            value={whyHarness}
            onChange={setWhyHarness}
            rows={4}
          />
        </div>
      </div>
      <div>
        <FormButton
          text="Save"
          clickAction={fireSave}
          className="btn-outline-primary"
        />
      </div>
    </div>
  );
};

export default CreateMeddpicForm;

// oppDetailsId
// techChamp
// businessChamp
// economicBuyer
// technicalPain
// businessPain
// technicalMetrics
// businessMetrics
// whyAnything
// whyNow
// whyHarness
