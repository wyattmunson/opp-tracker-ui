import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { Loader } from "../../lynx";
import PageLoader from "../../lynx/pageLoader/PageLoader";
import PeopleTable from "./peopleTable/PeopleTable";

const AllPeople = () => {
  const { getAllPeople } = useStoreActions((actions) => actions);
  const { people } = useStoreState((state) => state);

  useEffect(() => {
    if (people.length === 0) {
      getAllPeople();
    }
  }, []);

  if (people.legnth === 0) return <PageLoader header="Loading people" />;

  return (
    <div className="allPeopleContainer">
      <h3>All People</h3>
      <PeopleTable people={people} />
    </div>
  );
};

export default AllPeople;
