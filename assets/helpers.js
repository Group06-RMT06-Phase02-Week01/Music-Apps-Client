function onSignIn(googleUser) {
    const googleToken = googleUser.getAuthResponse().id_token;
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/googleLogin",
        data: { googleToken }
    })
    .done(response => {
        localStorage.setItem('access_token', response.access_token)
    })
    .fail(xhr => {
        console.log(xhr)
    })
}

function fetchPopular () {
    const year = $('#year').val()
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/popular/year",
        headers: {
            access_token: localStorage.getItem('access_token')
        },
        data: { year }
    })
        .done(response => {
            console.log(response)
            // $('#todo-list').empty()
            // response.todo.forEach(todo => {
            //     $('#todo-list').append(`
            //     <div class="card text-center">
            //         <div class="card-header">${todo.status}</div>
            //         <div class="card-body">
            //             <h5 class="card-title">${todo.title}</h5>
            //             <p class="card-text">${todo.description}</p>
            //             <a href="#" class="btn btn-primary btn-spacing" onclick="getOneTodos(${todo.id})">Update</a>
            //             <a href="#" class="btn btn-primary btn-spacing" onclick="deleteTodos(${todo.id})">Delete</a>
            //         </div>
            //         <div class="card-footer text-muted">${todo.due_date}<div>
            //     </div>`)
            // });
        })
        .fail(xhr => {
            console.log(xhr)
        })
}

function logout() {
    localStorage.clear()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}