module.exports.isAuthenticated = () => {

    if (sessionStorage.getItem(['vueauthdemo'])) {  //ändra vueayth......
        // Logged in 
        return true;
    } else {
        // Not logged in
        return false;
    }
}