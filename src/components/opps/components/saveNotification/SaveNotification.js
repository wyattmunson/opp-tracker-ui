import { useEffect, useState } from "react";

const SaveNotification = ({
  saveError,
  saveSuccess,
  originalValues,
  currentValues,
  editMode,
}) => {
  const [badProps, setBadProps] = useState([]);
  const [isEqual, setIsEqual] = useState(false);

  useEffect(() => {
    if (editMode) isEquivalent(originalValues, currentValues);

    console.log("ORIG VALES", originalValues);
  }, [originalValues, currentValues]);

  // check for equality
  let unequalProps = [];
  const isEquivalent = (a, b) => {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
      return false;
    }

    for (let i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
        console.log("BAD PROP DETECTED", propName);

        // only return flase here if we want to just catch any
        // failure without storing prop name
        // return false;
        unequalProps.push(propName);
        setIsEqual(false);
        setBadProps((badProps) => [...badProps, propName]);
        return false;
      }
    }
    // if (unequalProps.length > 0) {
    //   setIsEqual(false);
    //   return;
    // }
    // setBadProps([]);

    // if we made it here, we're good
    setIsEqual(true);
    return true;
  };

  //   console.log(isEquivalent(originalValues, currentValues));
  let notificationCondition = "noChanges";

  console.log("IS EQUAL", isEqual);

  if (saveSuccess) {
    notificationCondition = "saved";
  } else if (!isEqual) {
    notificationCondition = "unsaved";
  } else if (saveError) {
    notificationCondition = "error";
  }

  console.log("ORIG", originalValues);
  console.log("CURR", currentValues);
  console.log("BAD PROPS", badProps);

  return (
    <div className={displayOptions[notificationCondition].className}>
      <h6>
        <i className={displayOptions[notificationCondition].icon} />{" "}
        {displayOptions[notificationCondition].message}{" "}
        {unequalProps.map((i) => i)}
      </h6>
    </div>
  );
};

const displayOptions = {
  unsaved: {
    message: "Unsaved changes",
    className: "alert alert-warning",
    icon: "fas fa-pen",
  },
  saved: {
    message: "Changes saved",
    className: "alert alert-success",
    icon: "far fa-check-circle",
  },
  error: {
    message: "Failed to save",
    className: "alert alert-danger",
    icon: "fas fa-bomb",
  },
  noChanges: {
    message: "No changes",
    className: "alert alert-secondary",
    icon: "far fa-circle",
  },
  loading: {
    message: "Saving",
    className: "alert alert-warning",
    icon: "fas fa-circle-spinner",
  },
};

export default SaveNotification;
