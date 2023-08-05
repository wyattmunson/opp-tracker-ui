const apiCallPost = (e, endpoint) => {
  console.log("FIRING UPDATE API CALL", endpoint);
  fetch(`http://localhost:1515${endpoint}`, {
    method: "POST",
    body: JSON.stringify(e),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

const endpoints = {
  updateActionItem: "/opps/actionitems/update",
  createActionItem: "/opps/actionitems/create",
  createPerson: "/opps/person/create",
  updatePerson: "/opps/person/update",
};

const updateActionItem = (e) => {
  return apiCallPost(e, endpoints.updateActionItem);
};

const createActionItem = (e) => {
  return apiCallPost(e, endpoints.createActionItem);
};

const createPerson = (e) => {
  return apiCallPost(e, endpoints.createPerson);
};
const updatePerson = (e) => {
  return apiCallPost(e, endpoints.updatePerson);
};

module.exports = {
  updateActionItem,
  createActionItem,
  createPerson,
  updatePerson,
};
