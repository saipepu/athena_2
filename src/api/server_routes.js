import { api } from './server_api'

export const fetchAllEmployee = async (set, get) => {
  await fetch(`${api}/employee/getAll`)
  .then(result => result.json().then(data => set(data.message)))
  .catch(err => err);
}

export const fetchOneEmployee = async (role, id, setEmployee) => {
  console.log('Getting User with id -> ' , id)
  await fetch(`${api}/${role}/getOne/${id}`, {
    method: 'GET'
  })
  .then(result => result.json().then(data => setEmployee(data.message)))
  .catch(error => error);
}

export const updateEmployee = async (role, id, obj, setResponse) => {
  console.log('updating employee data . . . ')
  await fetch(`${api}/${role}/updateInfo/${id}`, {
    method: 'POST',
    headers: {
      accepted: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
  .then(result => result.json().then(data => {
    setResponse(data)
  }))
  .catch(error => error);
}