function newImage (name, x, y) {
    let newImage = document.createElement('img')
    newImage.style.position = 'fixed'
    newImage.src = name
    newImage.style.left = x + 'px'
    newImage.style.bottom = y + 'px'
    document.body.append(newImage)
    return newImage
}

/////////////////road//////////////////

function roadLane(y) {
    let x = 0
    while(x < window.innerWidth) {
        newImage('assets/road1.png', x, y)
        x += 200
    }
}

var numLanes = 0
var roadStart = 0
const laneHeight = 185
const laneOffset = [5, 70, 130]
function road(){
    const border = 100
    const paintHeight = window.innerHeight - 2 * border
    numLanes = Math.floor(paintHeight / laneHeight)
    const totalRoad = numLanes * laneHeight

    roadStart = border + (paintHeight - totalRoad) / 2 
    let y = roadStart
    console.log(y)
    for (var i = 0; i < numLanes; i++) {
        roadLane(y)
        y += laneHeight
    }
} 
road()

//button function//

function startGame() {
    console.log("click button")
    gameOver = false 
    createCars()
    const frogger = $(`#frogger`)
    const top = window.innerHeight - 50
    const left = (window.innerWidth / 2) - 16
    frogger.animate({top: `${top}`, left: `${left}`})
}

//Pop up Messages//

function StartGameBox(){
    const StartGameBox = document.getElementById("StartGameBox")
    startGame()
    StartGameBox.style.display = "none"
}

async function endGame() {
    const GameOverBox = document.getElementById("GameOverBox")
    gameOver = true
    GameOverBox.style.display = ""
    await awaitCars()
    // enable replay button
    console.log("enabling")
    const button = document.getElementById("Retry")
    button.style.display = ""
}

function GameOverBox(){
    const GameOverBox = document.getElementById("GameOverBox")
    startGame()
    GameOverBox.style.display = "none"
    const button = document.getElementById("Retry")
    button.style.display = "none"
}

async function winGame() {
    const WinGameBox = document.getElementById("WinGameBox")
    gameOver = true
    WinGameBox.style.display = ""
    await awaitCars()
    // enable replay button
    console.log("enabling 2")
    const button = document.getElementById("Replay")
    button.style.display = ""
}

function WinGameBox(){
    const WinGameBox = document.getElementById("WinGameBox")
    startGame()
    WinGameBox.style.display = "none"
    const button = document.getElementById("Replay")
    button.style.display = "none"
}