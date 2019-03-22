const isAuthenticated = () => {

  if (sessionStorage.getItem(['loginSession'])) {
    //Logged in
    return true;
  } else {
    //Not loggedin
    return false;
  }
}

export default isAuthenticated;