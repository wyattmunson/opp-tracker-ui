import { stageTypes } from "../../../../config/itemConfig";
import Card, { CardInverse } from "../../components/Card";
import ModuleIcons from "../../components/ModuleIcons";

const OppOverview = (props) => {
  const {
    startDate,
    povKickoffDate,
    demoDate,
    modules,
    stage,
    accountExecutive,
  } = props.opportunity;

  const age = new Date() - new Date(startDate);

  return (
    <div className="oppHeaderContainer">
      <div className="row">
        {/* <CardInverse
          header="Stage"
          text={<span className="badge bg-primary">{stage}</span>}
          subText={stageTypes[stage]}
        />
        <CardInverse
          header="Age"
          text={parseInt(age / 1000 / 60 / 60 / 24)}
          subText="days"
        />
        <CardInverse
          header="Modules"
          text={<ModuleIcons modules={modules} />}
        /> */}
        <StageDataBlock header="Stage" text={stage} />
        <DataBlock
          header="Modules"
          text={<ModuleIcons modules={modules} inverse />}
        />
        <DataBlock header="Account Executive" text={accountExecutive} />
        {/* <DataBlock
          header="POV Kickoff Date"
          text={
            povKickoffDate
              ? moment(povKickoffDate).format("ll")
              : "POV not started"
          }
          subText={povKickoffDate ? moment(povKickoffDate).fromNow() : null}
        /> */}
      </div>
    </div>
  );
};

const DataBlock = ({ header, text, subText }) => {
  return (
    <div className=" overviewBlock">
      <h6>{header}</h6>
      <p>{text}</p>
      <small>{subText}</small>
    </div>
  );
};
const StageDataBlock = ({ header, text, subText }) => {
  return (
    <div className=" overviewBlock">
      <h6>{header}</h6>
      <h5 className="badge bg-primary">{text}</h5> {stageTypes[text]}
      <small>{subText}</small>
    </div>
  );
};

export default OppOverview;
