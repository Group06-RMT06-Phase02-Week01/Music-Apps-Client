$(document).ready(() => {
    if(localStorage.getItem("access_token")){
        showMainPage()
    }
    else{
        showLoginPage()
    }

    getRandomQuote()

})