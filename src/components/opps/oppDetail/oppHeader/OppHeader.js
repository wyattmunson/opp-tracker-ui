import moment from "moment";
import { stageTypes } from "../../../../config/itemConfig";
import ModuleIcons from "../../components/ModuleIcons";

const OppHeader = ({
  startDate,
  povKickoffDate,
  demoDate,
  modules,
  stage,
  accountExecutive,
}) => {
  return (
    <div className="oppHeaderContainer">
      <div className="row">
        <StageDataBlock header="Stage" text={stage} />
        <DataBlock header="Modules" text={<ModuleIcons modules={modules} />} />
        <DataBlock
          header="Age"
          text={moment(startDate).format("ll")}
          subText={moment(startDate).fromNow()}
        />
        <DataBlock header="Account Executive" text={accountExecutive} />
        <DataBlock
          header="POV Kickoff Date"
          text={
            povKickoffDate
              ? moment(povKickoffDate).format("ll")
              : "POV not started"
          }
          subText={povKickoffDate ? moment(povKickoffDate).fromNow() : null}
        />
      </div>
    </div>
  );
};

const DataBlock = ({ header, text, subText }) => {
  return (
    <div className="col dataBlockCol">
      <h6>{header}</h6>
      <p>{text}</p>
      <small>{subText}</small>
    </div>
  );
};
const StageDataBlock = ({ header, text, subText }) => {
  return (
    <div className="col dataBlockCol">
      <h5>{header}</h5>
      <h5 className="badge bg-primary">{text}</h5> {stageTypes[text]}
      <small>{subText}</small>
    </div>
  );
};

export default OppHeader;
