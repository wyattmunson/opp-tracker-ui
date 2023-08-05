import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormButton, FormInput } from "../../../../../components";
import { getDefaultDate } from "../../../../../helpers/converters";

const EditOppForm = ({ oppDetail, saveOpp }) => {
  const [account, setAccount] = useState(oppDetail.account);
  const [accountExecutive, setAccountExecutive] = useState(
    oppDetail.accountExecutive
  );
  const [startDate, setStartDate] = useState(oppDetail.startDate);
  const [demoDate, setDemoDate] = useState(oppDetail.demoDate);
  const [stage, setStage] = useState(oppDetail.stage);
  const [salesforceLink, setSalesforceLink] = useState(
    oppDetail.salesforceLink
  );
  const [connectivityDate, setConnectivityDate] = useState(
    oppDetail.connectivityDate
  );
  const [povWinDate, setPovWinDate] = useState(oppDetail.povWinDate);
  const [povKickoffDate, setPovKickoffDate] = useState(
    oppDetail.povKickoffDate
  );
  const [harnessAccountId, setHarnessAccountId] = useState(
    oppDetail.harnessAccountId
  );
  const navigate = useNavigate();

  const saveRecord = () => {
    const payload = {
      account,
      accountExecutive,
      startDate,
      demoDate,
      povKickoffDate,
      opportunityId: oppDetail.opportunityId,
      povWinDate,
      connectivityDate,
      stage: parseInt(stage),
      harnessAccountId,
      salesforceLink,
    };

    saveOpp(payload);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <FormInput
            noColumns
            label="Account"
            changeCallback={setAccount}
            value={account}
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="Stage"
            changeCallback={setStage}
            value={stage}
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="Account Executive"
            changeCallback={setAccountExecutive}
            value={accountExecutive}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormInput
            noColumns
            label="Harness Account ID"
            changeCallback={setHarnessAccountId}
            value={harnessAccountId}
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="Salesforce Link"
            changeCallback={setSalesforceLink}
            value={salesforceLink}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormInput
            noColumns
            label="Start Date"
            changeCallback={setStartDate}
            value={getDefaultDate(startDate)}
            inputType="date"
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="Demo Date"
            changeCallback={setDemoDate}
            value={getDefaultDate(demoDate)}
            inputType="date"
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="POV Kickoff Date"
            changeCallback={setPovKickoffDate}
            value={getDefaultDate(povKickoffDate)}
            inputType="date"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <FormInput
            noColumns
            label="Connectivity Date"
            changeCallback={setConnectivityDate}
            value={getDefaultDate(connectivityDate)}
            inputType="date"
          />
        </div>
        <div className="col">
          <FormInput
            noColumns
            label="POV Win Date"
            changeCallback={setPovWinDate}
            value={getDefaultDate(povWinDate)}
            inputType="date"
          />
        </div>
      </div>
      <div className="d-grid gap-2">
        <FormButton
          noColumn
          text="Update Opportunity"
          className="btn-outline-primary"
          clickAction={saveRecord}
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

export default EditOppForm;
