import { useStoreState } from "easy-peasy";

const OwnerData = ({ owner }) => {
  const { currentOpportunity } = useStoreState((state) => state);
  if (!currentOpportunity) return owner;
  const { people } = currentOpportunity;
  const person = people.find((x) => x.personId === owner);
  if (!person) return owner;
  return <p>{person.personName}</p>;
};

export default OwnerData;
