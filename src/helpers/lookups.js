import airportList from "./airportList.json";

export const getAirportDetails = (inputCode) => {
  let result = airportList.find(
    (x) => x.airportCode === inputCode.toUpperCase()
  );
  console.log("GOT AIRPORT RESULT", result);
  // change to one liner and remove log after validating
  return result;
};

export const getIcaoCode = (iataCode) => {
  return getAirportDetails(iataCode)?.airportGpsCode;
};
