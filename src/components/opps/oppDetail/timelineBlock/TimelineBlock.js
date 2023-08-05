import moment from "moment";
import DetailHeader from "../../components/DetailHeader";

const TimelineBlock = ({ opportunity }) => {
  const timelineData = [
    {
      header: "Opp Created",
      text: moment(opportunity.startDate).format("ll"),
      subText: moment(opportunity.startDate).fromNow(),
    },
    {
      header: "Demo",
      text: opportunity.demoDate
        ? moment(opportunity.demoDate).format("ll")
        : "No demo",
      subText: opportunity.demoDate
        ? moment(opportunity.demoDate).fromNow()
        : null,
    },
    {
      header: "POV Kickoff",
      text: opportunity.povKickoffDate
        ? moment(opportunity.povKickoffDate).format("ll")
        : "POV not started",
      subText: opportunity.povKickoffDate
        ? moment(opportunity.povKickoffDate).fromNow()
        : null,
    },
    {
      header: "Connectivity",
      text: opportunity.connectivityDate
        ? moment(opportunity.connectivityDate).format("ll")
        : "POV not started",
      subText: opportunity.connectivityDate
        ? moment(opportunity.connectivityDate).fromNow()
        : null,
    },
    {
      header: "Tech Win",
      text: opportunity.povWinDate
        ? moment(opportunity.povWinDate).format("ll")
        : "In progress",
      subText: opportunity.povWinDate
        ? moment(opportunity.povWinDate).fromNow()
        : null,
    },
  ];

  return (
    <div className="detailBlockContainer">
      <DetailHeader text="Timeline" />
      <div className="row detailBlockContent">
        {timelineData.map((i) => (
          <DataBlock {...i} />
        ))}
      </div>
    </div>
  );
};

const DataBlock = ({ header, text, subText }) => {
  return (
    <div className="col dataBlockCol quickCenter">
      <b>{header}</b>
      <p>{text}</p>
      <small>{subText}</small>
    </div>
  );
};

export default TimelineBlock;
