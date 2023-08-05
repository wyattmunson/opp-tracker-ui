import { useState } from "react";
import { FormButton } from "../../../components";
import Col from "../col/Col";
import Row from "../row/Row";
import "./tooltip.css";

const ToolTip = ({ text, message, icon }) => {
  let defaultIcon = "far fa-question-circle";
  if (icon === "comment") defaultIcon = "far fa-fa-comment-alt";
  if (icon === "sticky-note") defaultIcon = "fa-sticky-note";
  if (icon === "exclamation") defaultIcon = "fa-exclamation-circle";
  if (icon === "exclamation") defaultIcon = "fas fa-exclamation-circle";
  if (icon === "lightbulb") defaultIcon = "far fa-lightbulb";
  if (icon === "warning") defaultIcon = "far fa-exclamation-triangle";
  if (icon === "bullhorn") defaultIcon = "far fa-bullhorn";

  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      {" "}
      <i
        className={`${defaultIcon} lynxTooltipIcon`}
        onClick={() => setShowTooltip(!showTooltip)}
      />
      {showTooltip && (
        <ToolTipBody
          text={text}
          message={message}
          closeTooltip={(e) => setShowTooltip(e)}
        />
      )}
    </>
  );
};

const ToolTipBody = ({ message, header, closeTooltip }) => {
  return (
    <div className="lynxTooltipBody">
      <Row>
        <Col>
          <small>{header || "TIP"}</small>
        </Col>
        <Col className="lynxTooltipCloseCol">
          <i
            className="fas fa-times lynxTxRight"
            onClick={() => closeTooltip(false)}
          />
        </Col>
      </Row>
      <p>{message}</p>
      {/* <FormButton
        text="Close"
        // clickAction={() => closeToolTip(false)}
        className={"btn-outline-secondary"}
        long
      /> */}
    </div>
  );
};

export default ToolTip;
