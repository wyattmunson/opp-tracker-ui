import { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import OppCallList from "./oppCallList/OppCallList";
import OppActionItemList from "./oppActionItemList/OppActionItemList";
import { LinkButton } from "../../../components";
import TimelineBlock from "./timelineBlock/TimelineBlock";
import PersonList from "./personList/PersonList";
import OppOverview from "./oppOverview/OppOverview";
import harnessLogo from "../../../assets/images/harnessLogo.png";

const OppDetail = () => {
  const { currentOpportunity } = useStoreState((state) => state);
  const { setCurrentOpp } = useStoreActions((action) => action);
  const opportunityId = window.location.pathname.replace("/opps/", "");

  useEffect(() => {
    fetch(`http://localhost:1515/opps/${opportunityId}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCurrentOpp(res);
      });
  }, [opportunityId]);

  if (!currentOpportunity || currentOpportunity === {}) {
    return <div>Loading opps...</div>;
  }

  const { opportunity } = currentOpportunity;

  if (!opportunity) return <h1>NO OPP</h1>;
  return (
    <div className="oppDetailContainer">
      <div className="row">
        <div className="col">
          <h3>{opportunity.account}</h3>
        </div>
        <div className="col ediOppButtons">
          {opportunity.harnessAccountId && (
            <a
              href={`https://app.harness.io/ng/#/account/${opportunity.harnessAccountId}`}
              className="btn btn-outline-secondary"
              target="_blank"
            >
              <img src={harnessLogo} alt="Harness Logo" height="20px" />
            </a>
          )}
          {opportunity.salesforceLink && (
            <a
              href={opportunity.salesforceLink}
              className="btn btn-outline-secondary"
              target="_blank"
            >
              <i className="fab fa-salesforce" />
            </a>
          )}

          <LinkButton
            link={`/opps/${opportunityId}/meddpic/create`}
            className="btn btn-outline-secondary"
            text="MEDDPIC"
          />
          <LinkButton
            link="/opps/createcall"
            className="btn btn-outline-secondary"
            text="New Call"
          />
          <LinkButton
            link="/opps/createactionitem"
            className="btn btn-outline-secondary"
            text="New Action Item"
          />
          <LinkButton
            link={`${window.location.pathname}/edit`}
            className="btn btn-outline-primary"
            text={<i className="fas fa-cog" />}
          />
        </div>
      </div>
      {/* <OppHeader {...opportunity} /> */}
      <OppOverview opportunity={opportunity} />
      <TimelineBlock opportunity={opportunity} />

      {/* ACTION ITEM LIST */}
      <OppActionItemList actionItems={currentOpportunity.actionItems} />
      {/* CALL LIST */}
      <OppCallList calls={currentOpportunity.calls} oppId={opportunityId} />
      {/* PERSON LIST */}
      <PersonList people={currentOpportunity.people} oppId={opportunityId} />
    </div>
  );
};

export default OppDetail;
