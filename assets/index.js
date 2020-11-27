function showMainPage(){
    $("#login-page").hide()
    $("#register-page").hide()
    $("#list-music").show()
    $("#btn-logout").show()
    
}
function showLoginPage(){
    $("#login-page").show()
    $("#register-page").hide()
    $("#list-music").hide()
    $("#btn-logout").hide()
}
function logout(){
    localStorage.clear()
    showLoginPage()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
    .then(function () {
        console.log('User signed out.');
    });
}


function registerPage(){
    $("#login-page").hide()
    $("#register-page").show()
    $("#list-music").hide()
    $("#btn-logout").hide()
}
function login(){
    
}
$(document).ready(() => {
    if(localStorage.getItem("access_token")){
        showMainPage()
    }
    else{
        showLoginPage()
    }


})