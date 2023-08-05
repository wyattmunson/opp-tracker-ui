import { useState } from "react";
import { FormButton, FormInput } from "../../../../components";

const CreateOppForm = ({ saveRecord }) => {
  const [account, setAccount] = useState(null);
  const [modules, setModules] = useState(null);
  const [stage, setStage] = useState(null);
  const [accountExecutive, setAccountExecutive] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [demoDate, setDemoDate] = useState(null);
  const [povKickoffDate, setPovKickoffDate] = useState(null);

  // modules
  const [cdng, setCdng] = useState(false);
  const [cdcg, setCdcg] = useState(false);
  const [ci, setCi] = useState(false);
  const [ff, setFf] = useState(false);
  const [ccm, setCcm] = useState(false);
  const [sto, setSto] = useState(false);
  const [ce, setCe] = useState(false);

  const getModuleArray = () => {
    let moduleArray = [];
    if (cdng) moduleArray.push("CDNG");
    if (cdcg) moduleArray.push("CDCG");
    if (ci) moduleArray.push("CI");
    if (ff) moduleArray.push("FF");
    if (ccm) moduleArray.push("CCM");
    if (sto) moduleArray.push("STO");
    return moduleArray;
    // return "{CDNG, FF}";
  };

  const initiateSave = () => {
    const payload = {
      account,
      modules,
      stage,
      accountExecutive,
      startDate,
      demoDate,
      povKickoffDate,
      modules: getModuleArray(),
    };
    saveRecord(payload);
  };
  return (
    <div className="createOppFormCotainer">
      <div className="row">
        <FormInput
          label="Account / Name"
          changeCallback={setAccount}
          noColumns
        />
      </div>
      <div className="row">
        <div className="col">
          <FormInput
            label="Engagement Start Date"
            changeCallback={setStartDate}
            inputType="date"
            noColumns
          />
        </div>
        <div className="col">
          <FormInput
            label="Demo Date"
            changeCallback={setDemoDate}
            inputType="date"
            noColumns
          />
        </div>
        <div className="col">
          <FormInput
            label="POV Start Date"
            changeCallback={setPovKickoffDate}
            inputType="date"
            noColumns
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormInput
            label="Account Executive"
            changeCallback={setAccountExecutive}
            noColumns
          />
        </div>
        <div className="col">
          <FormInput label="Stage" changeCallback={setStage} noColumns />
        </div>
      </div>
      <div className="row">
        <ModuleCheckbox text="CDNG" handleChange={() => setCdng(!cdng)} />
        <ModuleCheckbox text="CDCG" handleChange={() => setCdcg(!cdcg)} />
        <ModuleCheckbox text="CI" handleChange={() => setCi(!ci)} />
        <ModuleCheckbox text="CCM" handleChange={() => setCcm(!ccm)} />
        <ModuleCheckbox text="FF" handleChange={() => setFf(!ff)} />
        <ModuleCheckbox text="STO" handleChange={() => setSto(!sto)} />
        <ModuleCheckbox text="CE" handleChange={() => setCe(!ce)} />
      </div>
      <div className="d-grid gap-2">
        <FormButton
          className="btn btn-primary"
          text="Create Opportunity"
          clickAction={initiateSave}
        />
      </div>
    </div>
  );
};

const ModuleCheckbox = ({ text, handleChange }) => {
  return (
    <div className="col">
      <label for={`item-checkbox-${text}`}>{text}</label>
      <input
        id={`item-checkbox-${text}`}
        type="checkbox"
        onChange={handleChange}
      />
    </div>
  );
};

export default CreateOppForm;
