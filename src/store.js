import { createStore, action, thunk } from "easy-peasy";
import { apiCallGet } from "./helpers/api";

const getRandom = () => {
  return Math.floor(Math.random() * 100000000);
};

const store = createStore({
  selectedBox: null,

  // opps
  opps: [],
  currentOpportunity: {},
  myActionItems: [],
  people: [],

  // GLOBAL FETCH ERROR
  fetchInProgress: false,
  fetchSuccessful: false,
  fetchFailed: false,

  // alerts
  alerts: [],

  // global fetch set
  setFetchInProgress: action((state, payload) => {
    state.fetchInProgress = payload;
  }),
  setFetchSuccessful: action((state, payload) => {
    state.fetchSuccessful = payload;
  }),
  setFetchFailed: action((state, payload) => {
    state.fetchFailed = payload;
  }),

  // ALERTS
  // update store with new alert
  setAlert: action((state, payload) => {
    state.alerts.push(payload);
  }),
  // recieve alert as input from another component
  addAlert: action((state, payload) => {
    // {type, text, headerText}
    console.log("Firing addAlert");
    payload.id = getRandom();
    state.alerts.push(payload);
  }),
  removeAlert: action((state, payload) => {
    // find array
    console.log("DELETE input payload", payload);
    let array = state.alerts.findIndex((x) => {
      return x.id === payload;
    });
    console.log("DELETE array found", array);
    state.alerts.splice(array, 1);
  }),

  setOpps: action((state, payload) => {
    state.opps = payload;
  }),

  setCurrentOpp: action((state, payload) => {
    state.currentOpportunity = payload;
  }),

  setMeddicSaved: action((state, payload) => {
    state.meddicSaved(payload);
  }),

  setMyActionItems: action((state, payload) => {
    console.log("SETTING ACTION ITEMS", payload);
    state.myActionItems = payload;
  }),

  setPeople: action((state, payload) => {
    state.people = payload;
  }),

  saveMeddpic: thunk(async (actions, payload, { injections }) => {
    fetch("http://localhost:1515/opps/meddic/create", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        actions.setMeddicSaved(true);
      })
      .catch((err) => {
        console.error("Failed to update call:", err);
        actions.setMeddicSaved(false);
      });
  }),

  getMyActionItems: thunk(async (actions, payload) => {
    return fetch("http://localhost:1515/opps/actionitems/mine", {
      method: "GET",
      // body: JSON.stringify(payload),
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        actions.setMyActionItems(res);
      })
      .catch((err) => {
        console.error("Failed to update call:", err);
        actions.setMeddicSaved(false);
      });
  }),

  getAllPeople: thunk(async (actions, payload) => {
    return fetch("http://localhost:1515/opps/people", {
      method: "GET",
      // body: JSON.stringify(payload),
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        actions.setPeople(res);
      })
      .catch((err) => {
        console.error("Failed to update people:", err);
        // actions.setMeddicSaved(false);
      });
  }),

  // getOpps: action((state, payload) => {
  //   apiCallGet("/opps")
  //     .then((res) => {
  //       // state.setOpps(res);
  //       // setOpps(res);
  //       console.log("RES", res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }),
});

export default store;
