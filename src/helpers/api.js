export const apiCallPost = (url, body) => {
  return fetch("http://localhost:1515" + url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      console.log(res.ok);
      throw new Error(res);
    }
    return res.json();
  });
};

export const apiCallGet = (url, headers) => {
  if (!url.match("http")) {
    url = "http://localhost:1515" + url;
  }
  return fetch(url, {
    headers: headers,
  }).then((res) => {
    if (!res.ok) {
      throw Error;
    }
    return res.json();
  });
};
