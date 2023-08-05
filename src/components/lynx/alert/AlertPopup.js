import useAlert from "./useAlert";
import "./alert.css";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";

const AlertPopper = ({ details, position }) => {
  const options = getTypeDetails(details?.type);
  const { removeAlert } = useStoreActions((actions) => actions);

  // start countdown and initiate destruction
  let timeoutLength = 5000;
  useEffect(() => {
    setTimeout(() => {
      // setText("");
      // setType("");
      // setHeaderText("");
      removeAlert(details?.id);
    }, timeoutLength);
  }, []);

  // after timeout completes, send request to delete alert from array
  // this should be moved from e-p to a parent handler func

  return (
    <div className={`lynxAlertPopperContiner  ${options?.headerColor}`}>
      {/* <div className={`lynxAlertPopupContainer  ${details.headerColor}`}></div> */}
      <div className="lynxAlertPopperIcon">
        <h3>
          <i className={options?.icon} />
        </h3>
      </div>
      <div className="">
        <div className={` ${details.headerColor}`}>
          <p>
            <small>{details?.type?.toUpperCase()}</small>
          </p>
        </div>
        <div className={``}>
          <p>{details?.message}</p>
        </div>
      </div>
    </div>
  );
};

const AlertPopup = () => {
  const { alerts } = useStoreState((state) => state);
  const { text, type } = useAlert();
  console.log("ALERT LENGTH", alerts);

  // or if alert is not an array?
  if (alerts.legnth === 0) return null;

  return (
    <div className="lynxAlertContainer">
      {alerts.map((i, index) => (
        <AlertPopper details={i} position={index} />
      ))}
    </div>
  );

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
