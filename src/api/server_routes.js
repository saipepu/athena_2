import { api } from './server_api'

export const fetchAllEmployee = async (set, get, pageNumber, limit) => {
  await fetch(`${api}/employee/getAll?page=${pageNumber}&limit=${limit}`)
    .then(result => result.json()
      .then(data => {
        console.log(data);
        set(data.message.result)
      }))

    .catch(err => err);
}

export const fetchOneEmployee = async (role, id, setEmployee) => {
  console.log('Getting User with id -> ', id)
  await fetch(`${api}/${role}/getOne/${id}`, {
    method: 'GET'
  })
    .then(result => result.json().then(data =>
      setEmployee(data.message)
    ))
    .catch(error => error);
}

export const updateEmployee = async (role, id, obj, setResponse) => {
  console.log('updating employee data . . . ')
  console.log(obj);
  await fetch(`${api}/${role}/updateInfo/${id}`, {
    method: 'POST',
    headers: {
      "accepted": 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(result => result.json().then(data => {
      console.log(data);
      setResponse(data)
    }))
    .catch(error => console.log(error));
}