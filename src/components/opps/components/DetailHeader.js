const DetailHeader = ({ text, buttons }) => {
  return (
    <div className="detailBlockHeader">
      <div className="row detailBlockHeaderRow">
        <div className="col">
          <h6>
            <b>{text}</b>
          </h6>
        </div>
        <div className="col quickRight">{buttons}</div>
      </div>
    </div>
  );
};

export default DetailHeader;
