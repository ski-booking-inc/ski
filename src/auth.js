module.exports.isAuthenticated = () => {

  if (sessionStorage.getItem(['loginSession'])) {
    //Logged in
    return true;
  } else {
    //Not logged in
    return false;
  }
}
