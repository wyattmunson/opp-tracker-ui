import moment from "moment";

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const percentFormatter = (num) => {
  return parseFloat(num).toFixed(2) + "%";
};

export const getBoxSelectOptions = (boxes) => {
  return boxes.map((x) => ({
    value: x.boxId,
    label: `${x.boxId} - ${x.boxName}`,
  }));
};

export const getSelectOptions = (arr, value, label) => {
  return arr.map((x) => ({
    value: x[value],
    label: x[label],
  }));
};

export const getDefaultDate = (date) => {
  // handle errors - null input
  if (!date) return null;

  const newDate = date.split("T")[0];
  return newDate;
};

export const convertToUnixTime = (timestamp) => {
  return Math.floor(new Date(timestamp).getTime() / 1000);
};

export const getDateBuffer = (timestamp) => {
  let unixTime = convertToUnixTime(timestamp);

  // subtract 12 hours for begin time
  let begin = unixTime - 39600;
  // add 36 hours for begin time
  let end = unixTime + 129600;
  console.log(unixTime, begin, end);

  return { begin: begin, end: end };
};
// export const getSelectOptions = opt;

export const getFormattedTime = (timestamp, formatType) => {
  let formatted = moment(timestamp).format(formatType);
  if (formatted === "Invalid date") return null;
  return formatted;
};
