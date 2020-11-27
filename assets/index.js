
function login(){
    
}
$(document).ready(() => {
    if(localStorage.getItem("access_token")){
        showMainPage()
    }
    else{
        showLoginPage()
    }

    songsByArtist('isyana', 3, 1)
})