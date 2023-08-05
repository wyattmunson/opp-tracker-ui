import { createContext, useState } from "react";

const ALERT_TIME = 500000;
// const ALERT_TIME = 5000;
const initialState = {
  text: "",
  type: "",
  headerText: "",
};

const AlertContext = createContext({
  ...initialState,
  setAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  console.log("ALERT PROVIDER FIRING");
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [headerText, setHeaderText] = useState("");

  const setAlert = (text, type, headerText) => {
    setText(text);
    setType(type);
    setHeaderText(headerText);

    setTimeout(() => {
      setText("");
      setType("");
      setHeaderText("");
    }, ALERT_TIME);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
