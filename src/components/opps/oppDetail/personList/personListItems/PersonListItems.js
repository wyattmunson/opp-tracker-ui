import { LinkButton } from "../../../../../components";

const PersonListItems = ({ people, oppId }) => {
  return (
    <div>
      {people.map((i) => (
        <div className="row actionItemListItem">
          <div className="col-3">
            <p>{i.personName}</p>
          </div>
          <div className="col-3">
            <p>{i.title}</p>
          </div>
          <div className="col-3">
            <p>{i.email}</p>
          </div>
          {/* <CallListCell text={i.nextSteps} /> */}
          <div className="col-3">
            {/* <p> */}
            <LinkButton
              className="btn btn-outline-secondary btn-sm"
              text="View"
              link={`/opps/${oppId}/people/${i.personId}`}
            />
            {/* </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonListItems;
