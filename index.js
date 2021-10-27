let message = document.querySelector('#message')


const addMovie = (event) => {
    // allows funcitonality to add a movie
    event.preventDefault()
    let inputField = document.querySelector("input").value
    if (inputField === "") {return}
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField    
    
    //functionality to cross off a movie
    movieTitle.addEventListener('click', (event) => {
        crossOffMovie(event)
    })

    // allows functionality to delete a movie 
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', (event) =>{
         deleteMovie(event)
    })
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    document.querySelector('input').value = ""
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
}


document.querySelector('form').addEventListener('submit', (event) => {
    addMovie(event)
})

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.className === 'checked') {
        message.textContent = "Movie Checked"
    } else {
        message.textContent = "Movie Un-checked"
    }

}