import { useStoreState } from "easy-peasy";
import { LinkButton } from "../../../../components";
import DetailHeader from "../../components/DetailHeader";
import ActionItemList from "./actionItemList/ActionItemList";
import { filterAndSortCompletedItems } from "./helpers/sorters";
import { TableHeaderItem } from "../../components/Table";

const OppActionItemList = () => {
  const { currentOpportunity } = useStoreState((state) => state);

  if (currentOpportunity.actionItems === undefined) return null;
  const { actionItems } = currentOpportunity;

  const completed = currentOpportunity.actionItems.filter(
    (x) => x.completed === true
  );

  const filteredItems = filterAndSortCompletedItems(actionItems);

  console.log("ACTION ITEM ROE", currentOpportunity);

  return (
    <div className="detailBlockContainer">
      <DetailHeader
        text="Action Items"
        buttons={
          <LinkButton
            text="New Action Item"
            link="/opps/createactionitem"
            className="btn btn-outline-primary"
          />
        }
      />
      <div className="detailBlockContent">
        <div className="row actionItemListHeader">
          <TableHeaderItem header="Status" colLength="col-2" />
          <TableHeaderItem header="Priority" colLength="col-1" />
          <TableHeaderItem header="Item" colLength="col-4" />
          <TableHeaderItem header="Due Date" colLength="col-2" />
          <TableHeaderItem header="Action Owner" colLength="col-2" />
          <TableHeaderItem header="" colLength="col-1" />
        </div>
        <ActionItemList
          actionItems={filteredItems}
          oppId={currentOpportunity.opportunityId}
        />
      </div>
    </div>
  );
};

export default OppActionItemList;
