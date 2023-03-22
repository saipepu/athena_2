import { api } from "./server_api";

export const signUp = async (values, setResponse, isHR) => {
  console.log("sign up registration");
  let type = isHR ? "admin" : "employee";
  await fetch(`${api}/${type}/signup`, {
    method: "POST",
    headers: {
      accepted: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((result) => result.json().then((data) => setResponse(data)))
    .catch((error) => error);
};
export const signIn = async (values, setResponse, isHR) => {
  console.log("sign in registration");
  let type = isHR ? "admin" : "employee";
  await fetch(`${api}/${type}/signin`, {
    method: "POST",
    headers: {
      accepted: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((result) => result.json().then((data) => setResponse(data)))
    .catch((error) => error);
};
export const signOut = async (setResponse, role) => {
  console.log("sign out registration");
  await fetch(`${api}/${role}/signout`, {
    method: "GET",
  })
    .then((result) => result.json().then((data) => setResponse(data)))
    .catch((error) => error);
};
