export const isAuth = ( role, id ) => {
  // console.log('isAuth', role , id)
  const session = JSON.parse(localStorage.getItem('athena-token'))
  if(session != null) {
    const [currentRole, currentData] = Object.entries(session)[0];
    if(role !== currentRole || id !== currentData._id) {
      return false;
    } else {
      return true
    }
  } else {
    return false
  }
}