import { useState } from "react";
import { Link } from "react-router-dom";
import { FormInput } from "../../../../components";

const PeopleTable = ({ people }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = people.filter((x) =>
    x.personName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <FormInput
        noColumns
        changeCallback={setSearchTerm}
        placeholder="Search people"
      />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Person</th>
            <th>Email</th>
            <th>Title</th>
            <th>Supervisor</th>
            <th>Internal</th>
            <th>Opportunity</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((i) => (
            <PersonItem i={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PersonItem = ({ i }) => {
  return (
    <tr>
      <th scope="row">{i.personId}</th>
      <td>
        <Link to={`/opps/people/edit/${i.personId}`}>{i.personName}</Link>
      </td>
      <td>{i.email}</td>
      <td>{i.title}</td>
      <td>{i.supervisor}</td>
      <td>{i.internal ? "✅" : ""}</td>
      <td>{i.opportunity}</td>
    </tr>
  );
};

export default PeopleTable;
