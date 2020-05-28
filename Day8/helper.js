const url = "https://striveschool.herokuapp.com/api/product/";
let encoded =btoa('user12:5s*f!thGyuC8xm&h')
const getEvents = async () => {
  headers: new Headers({
    "Content-Type": "application/json",
    "Authorization" : "Basic" + encoded,
  })
  let response = await fetch(url); // this is getting the response from the API fetching
  return await response.json(); // this is returning the result of the promise in an usable format
};

let encoded =btoa('user12:5s*f!thGyuC8xm&h')
const saveEvent = async (agendaEvent) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(agendaEvent),
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization" : "Basic" + encoded,
    }),
  });
  return response;
};
