import "./modal.css";

const GlobalModalDetail = ({ show }) => {
  // return null if should hide
  if (!show) return null;

  return (
    <div className="lynxGlobalModal">
      <h1>Modalllllllllll</h1>
    </div>
  );
};

const GlobalModal = ({ children, show }) => {
  return <GlobalModalDetail show={show}>{children}</GlobalModalDetail>;
};

export default GlobalModal;
