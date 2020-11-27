const host = 'http://localhost:3000'

function onSignIn(googleUser) {
    const googleToken = googleUser.getAuthResponse().id_token;

    $.ajax({
        method: "POST",
        url: host + "/googleLogin",
        data: { googleToken }
    })
    .done(response => {
        localStorage.setItem('access_token', response.access_token)
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

function songsByArtist(artistName, dataLength, pageNumber){
    $.ajax({
        url: host + `/music-match/search/${artistName}/${dataLength}/${pageNumber}`,
        method: 'GET',
    })
        .done(response => {
            console.log(response)
            
        })
        .fail(xhr => {
            console.log(xhr)
        })
} 
function register(){
    const email = $("#email-regis").val()
    const password = $("#password-regis").val()
        $.ajax({
            method: "POST",
            url: host + "/register",
            data: {
                email,
                password
            }
        })
        .done(response => {
            console.log(response)
            showLoginPage()
        })
        .fail((xhr, textStatus) => {
            console.log(textStatus)
        })
}
function login(){
    const email = $("#email-login").val()
        const password = $("#password-login").val()
        $.ajax({
            method: "POST",
            url: host + "/login",
            data: {
                email,
                password
            }
        })
        .done(response => {
            console.log(response)
            localStorage.setItem('access_token', response.access_token)
            showMainPage()
        })
        .fail((xhr, textStatus) => {
            console.log(textStatus)
        })
        .always(_ => {
            $("#login-form").trigger("reset")
        })
}
function fetchMusic(){
    // $("#list-music").empty()
    $.ajax({
        method: "GET",
        url:  `${host}/todos`,
        headers: {
            access_token: localStorage.getItem("access_token")
        }
    })
    .done(response => {
        response.forEach(element => {
            // console.log(element.id)  
            $("#todo-list").append(` 
            <div class="card bg-ligth mb=10 pd=10" id="music-list">
                <div class="card-deck m">
                    <div class="card-body text-center">
                        <p class="card-text">${element.title}</p>
                        <p class="card-text">${element.description}</p>
                        <p class="card-text text-muted"> ${element.due_date.substr(0, 10)}</p>
                    </div>
                </div>
            </div>`)
        });
    })
    .fail(xhr => {
        console.log(xhr)
    })
}
function login(){
    const email = $("#email-login").val()
        const password = $("#password-login").val()
        $.ajax({
            method: "POST",
            url: host + "/login",
            data: {
                email,
                password
            }
        })
        .done(response => {
            console.log(response)
            localStorage.setItem('access_token', response.access_token)
            showMainPage( )
        })
        .fail((xhr, textStatus) => {
            console.log(textStatus)
        })
}
function register(){
    const email = $("#email-regis").val
    const password = $("#password-regis").val()
        $.ajax({
            method: "POST",
            url: host + "/register",
            data: {
                email,
                password
            }
        })
        .done(response => {
            console.log(response)
            showLoginPage()
        })
        .fail((xhr, textStatus) => {
            console.log(textStatus)
        })
}
