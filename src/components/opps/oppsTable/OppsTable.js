import { useStoreState } from "easy-peasy";
import { useState } from "react";
import { FormInput, LinkButton } from "../../../components";
import TableRow from "./tableRow/TableRow";

const OppsTable = () => {
  const { opps } = useStoreState((state) => state);
  const [searchTerm, setSearchTerm] = useState("");
  // sort opps by name
  opps.sort((a, b) => a.account > b.account);

  // handle no opps
  if (!opps) return null;
  // partial filter by search
  // const filtered = opps.toLowerCase().includes(searchTerm.toLowerCase());
  const filtered = opps.filter((x) =>
    x.account.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="row oppTableHeaderContainer">
        <div className="col">
          <h3>All Opportunities</h3>
        </div>
        <div className="col quickRight">
          <LinkButton
            link="/opps/create"
            className={"btn btn-outline-primary"}
            text="Create Opp"
          />
        </div>
        <FormInput
          label="Search Opps"
          changeCallback={setSearchTerm}
          noColumns
          autoFocus
        />
      </div>
      {filtered.map((i) => (
        <div>
          <TableRow {...i} />
        </div>
      ))}
    </div>
  );
};

export default OppsTable;
