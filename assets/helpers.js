const host = 'http://localhost:3000'
function onSignIn(googleUser) {
    const googleToken = googleUser.getAuthResponse().id_token;

    $.ajax({
        method: "POST",
        url: host + "/googleLogin",
        data: { googleToken }
    })
    .done(response => {
        console.log(response)
    })
    .fail(xhr => {
        console.log(xhr)
    })
}

function showMainPage() {
    $("#login-page").hide()
    $("#register-page").hide()
    $("#list-music").show()
    $("#btn-logout").show()
    getRandomQuote()

}

function showLoginPage() {
    $("#login-page").show()
    $("#register-page").hide()
    $("#list-music").hide()
    $("#btn-logout").hide()
}

function logout() {
    localStorage.clear()
    showLoginPage()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
        .then(function () {
            console.log('User signed out.');
        });
}

function registerPage() {
    $("#login-page").hide()
    $("#register-page").show()
    $("#list-music").hide()
    $("#btn-logout").hide()
}

function getRandomQuote(){
    $.ajax({
        url : host +  '/quotes/random-quote',
        method : 'GET',
    })
    .done(response => {
        console.log(response)
        $('#quote').html(`
            <h5 class="card-content">${response.quoteText}</h5>
            <p class="card-header">${response.quoteAuthor}</p>
        `)
    })
    .fail(xhr => {
        console.log(xhr)
    })
}

function getInsult(){
    $.ajax({
        url: host + '/quotes/random-insult',
        method: 'GET',
    })
        .done(response => {
            console.log(response)
            $('#insult').html(`
            <h5 class="card-content">${response.insult}</h5>
        `)
        })
        .fail(xhr => {
            console.log(xhr)
        })
}