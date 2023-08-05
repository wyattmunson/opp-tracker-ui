import useAlert from "./useAlert";
import "./alert.css";
import { useStoreState } from "easy-peasy";

const AlertPopup = () => {
  const { alerts } = useStoreState((state) => state);
  const { text, type } = useAlert();

  if (text && type) {
    let details = getTypeDetails(type);

    return (
      <div className={`lynxAlertPopupContainer  ${details.headerColor}`}>
        <div className="lynxAlertPopupContainerIcon">
          <h3>
            <i className={details?.icon} />
          </h3>
        </div>
        <div className="lynxAlertPopupContainerContent">
          <div
            className={`lynxAlertPopupContainerHeader ${details.headerColor}`}
          >
            <p>
              <small>{type.toUpperCase()}</small>
            </p>
          </div>
          <div className={`lynxAlertPopupContainerBody`}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  } else {
    console.log("AlertPopup returning null");
    return null;
    // return <></>;
  }
};

const getTypeDetails = (type) => {
  const detailList = {
    primary: {
      icon: "far fa-comment",
      headerColor: "lynxClPrimary",
      bodyColor: "lynxClPrimarySubdued",
    },
    secondary: {
      icon: "far fa-comment",
      headerColor: "lynxClSecondary",
      bodyColor: "lynxClSecondarySubdued",
    },
    success: {
      icon: "far fa-check-circle",
      headerColor: "lynxClSuccess",
      bodyColor: "lynxClSuccessSubdued",
    },
    danger: {
      icon: "far fa-times-circle",
      headerColor: "lynxClDanger",
      bodyColor: "lynxClDangerSubdued",
    },
    warning: {
      icon: "fas fa-exclamation-circle",
      headerColor: "lynxClWarning",
      bodyColor: "lynxClWarningSubdued",
    },
    alert: {
      icon: "fas fa-exclamation-triangle",
      headerColor: "lynxClAlert",
      bodyColor: "lynxAlertSubdued",
    },
    info: {
      icon: "far fa-comment",
      headerColor: "lynxClInfo",
      bodyColor: "lynxClInfoSubdued",
    },
    default: {
      icon: "far fa-comment",
      headerColor: "lynxClInfo",
      bodyColor: "lynxClInfoSubdued",
    },
  };

  return detailList[type] || detailList.default;
};

// old banner
{
  /* <div className="lynxAlertPopupContainer">
<div className={`lynxAlertPopupContainerHeader ${details.headerColor}`}>
  <p>
    <i className={details?.icon} /> <small>{type.toUpperCase()}</small>
  </p>
</div>
<div className={`lynxAlertPopupContainerBody ${details?.bodyColor}`}>
  <p>{text}</p>
</div>
</div> */
}

export default AlertPopup;
