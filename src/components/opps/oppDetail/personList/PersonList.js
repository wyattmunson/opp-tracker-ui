import { LinkButton } from "../../../../components";
import DetailHeader from "../../components/DetailHeader";
import { TableHeaderItem } from "../../components/Table";
import PersonListItems from "./personListItems/PersonListItems";

const PersonList = ({ people, oppId }) => {
  const internalPeople = people.filter((x) => !x.internal);
  return (
    <div className="detailBlockContainer">
      <DetailHeader
        text="People"
        buttons={
          <LinkButton
            text="New Person"
            link="/opps/createperson"
            className="btn btn-outline-primary"
          />
        }
      />
      <div className="detailBlockContent">
        <PersonTable people={internalPeople} oppId={oppId} />
      </div>
    </div>
  );
};

const PersonTable = ({ people, oppId }) => {
  if (!people || people.length === 0) return <p>No people.</p>;
  return (
    <div>
      <div className="row actionItemListHeader">
        <TableHeaderItem header="Name" colLength="col-3" />
        <TableHeaderItem header="Title" colLength="col-3" />
        <TableHeaderItem header="Email" colLength="col-3" />
        <TableHeaderItem header="" colLength="col-3" />
      </div>
      <PersonListItems people={people} oppId={oppId} />
    </div>
  );
};

export default PersonList;
