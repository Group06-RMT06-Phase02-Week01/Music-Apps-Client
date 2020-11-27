$(document).ready(() => {   
    $('#test').on('submit', (e) => {
        e.preventDefault()
        fetchPopular()
    })
})    
